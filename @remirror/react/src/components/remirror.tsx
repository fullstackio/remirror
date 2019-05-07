import React, { Component, Fragment, ReactNode, Ref } from 'react';

import { css, Interpolation, jsx } from '@emotion/core';
import {
  CompareStateParams,
  createDocumentNode,
  EDITOR_CLASS_NAME,
  EditorView as EditorViewType,
  EMPTY_PARAGRAPH_NODE,
  ExtensionManager,
  isFunction,
  NodeViewPortalContainer,
  ObjectNode,
  Position,
  ProsemirrorPlugin,
  RemirrorContentType,
  toHTML,
  Transaction,
  uniqueId,
} from '@remirror/core';
import { createEditorView, getDoc, RemirrorSSR, shouldUseDOMEnvironment } from '@remirror/react-ssr';
import {
  CalculatePositionerParams,
  cloneElement,
  getElementProps,
  GetRootPropsConfig,
  InjectedRemirrorProps,
  isReactDOMElement,
  PositionerMapValue,
  PositionerProps,
  PositionerRefFactoryParams,
  RefKeyRootProps,
  RemirrorElementType,
  RemirrorEventListenerParams,
  RemirrorProps,
  RenderPropFunction,
  uniqueClass,
  updateChildWithKey,
} from '@remirror/react-utils';
import { EditorState } from 'prosemirror-state';
import { defaultProps } from '../constants';
import { NodeViewPortal, NodeViewPortalComponent } from '../node-views';
import { defaultPositioner } from '../positioners';
import { defaultStyles } from '../styles';

export class Remirror extends Component<RemirrorProps, CompareStateParams> {
  public static defaultProps = defaultProps;
  public static $$remirrorType = RemirrorElementType.Editor;

  /**
   * Used to manage the controlled component value prop and pass it on to the state for internal usage
   */
  public static getDerivedStateFromProps(
    props: RemirrorProps,
    state: CompareStateParams,
  ): CompareStateParams | null {
    const { onStateChange, value: newState } = props;
    const { newState: prevState } = state;
    if (prevState && onStateChange && newState && newState !== prevState) {
      return {
        newState,
        prevState,
      };
    }
    return null;
  }

  private editorRef?: HTMLElement;
  private positionerMap = new Map<string, PositionerMapValue>();

  /**
   * The uid for this instance.
   */
  private uid = uniqueId({ size: 5 });
  /**
   * A unique class added to every instance of the remirror editor. This allows for non global styling.
   */
  private view: EditorViewType;
  private portalContainer!: NodeViewPortalContainer;
  private doc = getDoc();

  private get manager(): ExtensionManager {
    return this.props.manager;
  }

  constructor(props: RemirrorProps) {
    super(props);
    this.manager.init({ getEditorState: this.getEditorState, getPortalContainer: this.getPortalContainer });
    this.state = this.createInitialState();
    this.view = this.createView();
    this.manager.initView(this.view);
  }

  public updateExtensionManager() {
    this.manager
      .init({ getEditorState: this.getEditorState, getPortalContainer: this.getPortalContainer })
      .initView(this.view);
  }

  /**
   * Retrieve the editor state. This is passed through to the extension manager.
   */
  private getEditorState = () => this.state.newState;

  /**
   * Retrieve the portal container which used for managing node views which contain react components via the portal api.
   */
  private getPortalContainer = () => this.portalContainer;

  /**
   * Create the initial React state which stores copies of the Prosemirror editor state.
   * Our React state also keeps track of the previous active state.
   *
   * It this point both prevState and newState point to the same state object.
   */
  private createInitialState(): CompareStateParams {
    const { schema, plugins } = this.manager.data;
    const newState = EditorState.create({
      schema,
      doc: createDocumentNode({
        content: this.props.initialContent,
        doc: this.doc,
        schema,
      }),
      plugins,
    });

    return {
      newState,
      prevState: newState,
    };
  }

  /**
   * Create the Prosemirror editor view
   */
  private createView() {
    return createEditorView(
      undefined,
      {
        state: this.state.newState,
        nodeViews: this.manager.data.nodeViews,
        dispatchTransaction: this.dispatchTransaction,
        attributes: this.getAttributes,
        editable: () => {
          return this.props.editable;
        },
      },
      this.props.forceEnvironment,
    );
  }

  private rootPropsConfig = {
    called: false,
    suppressRefError: false,
  };

  /**
   * Retrieves up the editor styles for the editor
   */
  private get editorStyles() {
    const styles: Interpolation[] = [this.props.editorStyles];

    /* Inject styles from any extensions */
    styles.unshift(this.manager.data.styles);

    if (this.props.usesDefaultStyles) {
      styles.unshift(defaultStyles());
    }

    return styles;
  }

  private getRootProps = <GRefKey extends string = 'ref'>(
    options?: GetRootPropsConfig<GRefKey>,
  ): RefKeyRootProps<GRefKey> => {
    this.rootPropsConfig.called = true;
    return this.internalGetRootProps(options, false);
  };

  private internalGetRootProps<GRefKey extends string = 'ref'>(
    options?: GetRootPropsConfig<GRefKey>,
    internal = true,
  ): RefKeyRootProps<GRefKey> {
    const { refKey = 'ref', ...config } = options || {};

    if (internal) {
      //
    }

    return {
      [refKey]: this.onRef,
      key: this.uid,
      css: css(this.editorStyles),
      ...config,
    } as RefKeyRootProps<GRefKey>;
  }

  private getPositionerProps: InjectedRemirrorProps['getPositionerProps'] = options => {
    const { refKey = 'ref', ...config } = { ...defaultPositioner, ...(options || {}) };

    // Create the onRef handler which will store the ref to the positioner component
    const ref = this.positionerRefFactory({
      positionerId: config.positionerId,
      position: config.initialPosition as Position,
    });

    // Calculate the props
    const props = this.calculatePositionProps({ ...config });

    const ret = {
      ...props,
      [refKey]: ref,
    } as ReturnType<InjectedRemirrorProps['getPositionerProps']>;

    return ret;
  };

  private onRef: Ref<HTMLElement> = ref => {
    if (ref) {
      this.editorRef = ref;
      this.onRefLoad();
    }
  };

  private positionerRefFactory = ({
    positionerId,
    position,
  }: PositionerRefFactoryParams): Ref<HTMLElement> => element => {
    if (!element) {
      return;
    }

    const current = this.positionerMap.get(positionerId);
    if (!current || current.element !== element) {
      this.positionerMap.set(positionerId, { element, prev: { ...position, isActive: false } });
    }
  };

  private calculatePositionProps({
    initialPosition,
    getPosition,
    hasChanged,
    isActive,
    positionerId,
  }: CalculatePositionerParams): PositionerProps {
    const positionerMapItem = this.positionerMap.get(positionerId);
    let positionerProps = { isActive: false, ...initialPosition };

    // No element exist yet - so we can return early
    if (!positionerMapItem) {
      return positionerProps;
    }

    if (!hasChanged(this.state)) {
      return positionerMapItem.prev;
    }

    const { element, prev } = positionerMapItem;
    const params = { element, view: this.view, ...this.state };

    positionerProps.isActive = isActive(params);

    if (!positionerProps.isActive) {
      if (prev.isActive) {
        // This has changed so store the new value
        this.positionerMap.set(positionerId, { element, prev: positionerProps });
        return positionerProps;
      }
      return prev;
    }

    positionerProps = { ...positionerProps, ...getPosition(params) };
    this.positionerMap.set(positionerId, { element, prev: positionerProps });

    return positionerProps as PositionerProps;
  }

  /**
   * This sets the attributes that wrap the outer prosemirror node.
   * It is currently used for setting the aria attributes on the content-editable prosemirror div.
   */
  private getAttributes = (state: EditorState) => {
    const { attributes } = this.props;
    const propAttributes = isFunction(attributes)
      ? attributes({ ...this.eventListenerParams, state })
      : attributes;

    const managerAttrs = this.manager.data.attributes;

    const defaultAttributes = {
      role: 'textbox',
      'aria-multiline': 'true',
      // ...(this.placeholder ? { 'aria-placeholder': this.placeholder.text } : {}),
      ...(!this.props.editable ? { 'aria-readonly': 'true' } : {}),
      'aria-label': this.props.label || '',
      ...managerAttrs,
      class: `${EDITOR_CLASS_NAME} ${uniqueClass(this.uid, 'remirror')}${
        managerAttrs.class ? ' ' + managerAttrs.class : ''
      }`,
    };

    return { ...defaultAttributes, ...propAttributes };
  };

  /**
   * Part of the Prosemirror API and is called whenever there is state change in the editor.
   */
  private dispatchTransaction = (transaction: Transaction) => {
    const { dispatchTransaction } = this.props;
    if (dispatchTransaction) {
      dispatchTransaction(transaction);
    }
    const { state } = this.state.newState.applyTransaction(transaction);
    this.updateState(state);
  };

  private controlledComponentUpdateHandler?: (state: EditorState) => void;

  /**
   * Updates the state either by calling onStateChange when it exists or directly setting the state
   */
  private updateState(state: EditorState, triggerOnChange = true) {
    const { onChange, onStateChange } = this.props;

    const updateHandler = (updatedState?: EditorState) => {
      // For some reason moving the view.updateState here fixes a bug
      this.view.updateState(updatedState || state);
      if (onChange && triggerOnChange) {
        onChange({ ...this.eventListenerParams, state: updatedState || state });
      }
    };

    // Check if this is a controlled component.
    if (onStateChange) {
      this.controlledComponentUpdateHandler = (updatedState: EditorState) => {
        updateHandler(updatedState);
        this.controlledComponentUpdateHandler = undefined;
      };

      onStateChange({ ...this.eventListenerParams, state });
      return;
    }

    this.setState(({ newState }) => {
      return { prevState: newState, newState: state };
    }, updateHandler);
  }

  private addProsemirrorViewToDom(reactRef: HTMLElement, viewDom: Element) {
    if (this.props.insertPosition === 'start') {
      reactRef.insertBefore(viewDom, reactRef.firstChild);
    } else {
      reactRef.appendChild(viewDom);
    }
  }

  private onRefLoad() {
    if (!this.editorRef) {
      throw Error('Something went wrong when initializing the text editor. Please check your setup.');
    }
    const { autoFocus, onFirstRender, onStateChange } = this.props;
    this.addProsemirrorViewToDom(this.editorRef, this.view.dom);
    if (autoFocus) {
      this.view.focus();
    }

    // Handle setting the state when this is a controlled component
    if (onStateChange) {
      onStateChange(this.eventListenerParams);
    }

    if (onFirstRender) {
      onFirstRender(this.eventListenerParams);
    }

    this.view.dom.addEventListener('blur', this.onBlur);
    this.view.dom.addEventListener('focus', this.onFocus);
  }

  public componentDidUpdate({ editable, manager }: RemirrorProps) {
    if (this.props.editable !== editable && this.view && this.editorRef) {
      this.view.setProps({ ...this.view.props, editable: () => this.props.editable });
    }

    if (!manager.isEqual(this.props.manager)) {
      this.updateExtensionManager();
      this.view.setProps({ ...this.view.props, nodeViews: this.manager.data.nodeViews });
      this.setContent(toHTML({ node: this.state.newState.doc, schema: this.manager.data.schema }), true);
    }

    // Handle controlled component post update handler
    if (this.props.onStateChange && this.controlledComponentUpdateHandler && this.state.newState) {
      this.controlledComponentUpdateHandler(this.state.newState);
    }
  }

  public componentWillUnmount() {
    this.view.dom.removeEventListener('blur', this.onBlur);
    this.view.dom.removeEventListener('focus', this.onFocus);
    const editorState = this.state.newState;
    this.view.state.plugins.forEach(plugin => {
      const state = plugin.getState(editorState);
      if (state && state.destroy) {
        state.destroy();
      }
    });
    this.view.destroy();
  }

  private onBlur = () => {
    if (this.props.onBlur) {
      this.props.onBlur(this.eventListenerParams);
    }
  };

  private onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus(this.eventListenerParams);
    }
  };

  /**
   * Sets the content of the editor.
   *
   * @param content
   * @param triggerOnChange
   */
  private setContent = (content: RemirrorContentType, triggerOnChange = false) => {
    const { schema, plugins } = this.manager.data;
    const editorState = EditorState.create({
      schema,
      doc: createDocumentNode({ content, schema, doc: this.doc }),
      plugins,
    });

    this.updateState(editorState, triggerOnChange);
  };

  /**
   * Clear the content of the editor (reset to the default empty node)
   *
   * @param triggerOnChange whether to notify the onChange handler that the content has been reset
   */
  private clearContent = (triggerOnChange = false) => {
    this.setContent(EMPTY_PARAGRAPH_NODE, triggerOnChange);
  };

  get eventListenerParams(): RemirrorEventListenerParams {
    return {
      state: this.state.newState,
      view: this.view,
      getHTML: this.getHTML,
      getJSON: this.getJSON,
      getDocJSON: this.getDocJSON,
      getText: this.getText,
    };
  }

  get renderParams(): InjectedRemirrorProps {
    return {
      manager: this.manager,
      view: this.view,
      actions: this.manager.data.actions,
      clearContent: this.clearContent,
      setContent: this.setContent,
      uid: this.uid,

      /* Getters */
      getRootProps: this.getRootProps,
      getPositionerProps: this.getPositionerProps,
      state: this.state,
    };
  }

  private getText = (lineBreakDivider = '\n\n') => {
    const { doc } = this.state.newState;
    return doc.textBetween(0, doc.content.size, lineBreakDivider);
  };

  /**
   * Retrieve the HTML from the `doc` prosemirror node
   */
  private getHTML = () => {
    return toHTML({ node: this.state.newState.doc, schema: this.manager.data.schema, doc: this.doc });
  };

  private getJSON = (): ObjectNode => {
    return this.state.newState.toJSON() as ObjectNode;
  };

  private getDocJSON = (): ObjectNode => {
    return this.state.newState.doc.toJSON() as ObjectNode;
  };

  /**
   * Stores the portal container which is passed through to plugins and their node views
   *
   * @param container
   */
  private setPortalContainer(container: NodeViewPortalContainer) {
    if (!this.portalContainer) {
      this.portalContainer = container;
    }
  }

  /**
   * A helper function to render node view portal
   *
   * @param portalContainer
   */
  private renderNodeViewPortal = (portalContainer: NodeViewPortalContainer) => {
    this.setPortalContainer(portalContainer);
    const { children } = this.props;

    if (!isFunction(children)) {
      throw new Error('The child argument to the Remirror component must be a function.');
    }

    /* Reset the root props called status */
    this.rootPropsConfig.called = false;

    return (
      <>
        {this.renderReactElement(children)}
        <NodeViewPortalComponent nodeViewPortalContainer={portalContainer} />
      </>
    );
  };

  /**
   * Checks whether this is an SSR environment and returns a child array with the SSR component
   *
   * @param child
   */
  private injectSSRIntoElementChildren(child: ReactNode) {
    const { forceEnvironment, insertPosition } = this.props;

    if (shouldUseDOMEnvironment(forceEnvironment)) {
      return [child];
    }
    const ssrElement = this.renderSSR();
    return insertPosition === 'start' ? [ssrElement, child] : [child, ssrElement];
  }

  private renderSSR() {
    const state = this.state.newState;
    return (
      <RemirrorSSR
        attributes={this.getAttributes(state)}
        state={this.state.newState}
        manager={this.manager}
      />
    );
  }

  private renderReactElement(renderFunction: RenderPropFunction) {
    const element: JSX.Element | null = renderFunction({
      ...this.renderParams,
    });

    const { children: child, ...props } = getElementProps(element);

    if (!this.rootPropsConfig.called && !this.props.customRootProp) {
      return isReactDOMElement(element)
        ? cloneElement(element, this.internalGetRootProps(props), ...this.injectSSRIntoElementChildren(child))
        : jsx('div', this.internalGetRootProps(), ...this.injectSSRIntoElementChildren(element));
    }

    return jsx(
      Fragment,
      {},
      cloneElement(
        element,
        {},
        ...updateChildWithKey(element, this.uid, ch => {
          return cloneElement(
            ch,
            getElementProps(ch),
            ...this.injectSSRIntoElementChildren(ch.props.children),
          );
        }),
      ),
    );
  }

  public render() {
    const ret = <NodeViewPortal>{this.renderNodeViewPortal}</NodeViewPortal>;
    return ret;
  }
}
