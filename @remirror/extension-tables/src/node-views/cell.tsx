import { setCellAttrs } from '@atlaskit/adf-schema';
import ExpandIcon from '@atlaskit/icon/glyph/chevron-down';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView, NodeView } from 'prosemirror-view';
import React from 'react';
import ReactNodeView, { ForwardRef } from '../../../nodeviews/ReactNodeView';
import { EditorAppearance } from '../../../types';
import { PortalProviderAPI } from '../../../ui/PortalProvider';
import ToolbarButton from '../../../ui/ToolbarButton';
import WithPluginState from '../../../ui/WithPluginState';
import { closestElement } from '../../../utils';
import { toggleContextualMenu } from '../../actions';
import { EditorDisabledPluginState, pluginKey as editorDisabledPluginKey } from '../../editor-disabled';
import { pluginKey } from '../plugins/main';
import { pluginKey as tableResizingPluginKey, ResizeState } from '../plugins/table-resizing';
import { TableCssClassName as ClassName, TablePluginState } from '../../types';
import messages from '../ui/messages';

export interface CellViewProps {
  node: PMNode;
  view: EditorView;
  portalProviderAPI: PortalProviderAPI;
  getPos: () => number;
  appearance?: EditorAppearance;
}

export interface CellProps {
  view: EditorView;
  forwardRef: (ref: HTMLElement | null) => void;
  withCursor: boolean;
  isResizing?: boolean;
  isContextualMenuOpen: boolean;
  disabled: boolean;
  appearance?: EditorAppearance;
}

class Cell extends React.Component<CellProps & InjectedIntlProps> {
  public shouldComponentUpdate(nextProps: CellProps & InjectedIntlProps) {
    return (
      this.props.withCursor !== nextProps.withCursor ||
      this.props.isResizing !== nextProps.isResizing ||
      this.props.isContextualMenuOpen !== nextProps.isContextualMenuOpen
    );
  }

  public render() {
    const {
      withCursor,
      isResizing,
      isContextualMenuOpen,
      forwardRef,
      intl: { formatMessage },
      disabled,
      appearance,
    } = this.props;
    const labelCellOptions = formatMessage(messages.cellOptions);

    return (
      <div className={ClassName.CELL_NODEVIEW_WRAPPER} ref={forwardRef}>
        {withCursor && !disabled && appearance !== 'mobile' && (
          <div className={ClassName.CONTEXTUAL_MENU_BUTTON_WRAP}>
            <ToolbarButton
              className={ClassName.CONTEXTUAL_MENU_BUTTON}
              disabled={isResizing}
              selected={isContextualMenuOpen}
              title={labelCellOptions}
              onClick={this.handleClick}
              iconBefore={<ExpandIcon label={labelCellOptions} />}
            />
          </div>
        )}
      </div>
    );
  }

  private handleClick = () => {
    const { state, dispatch } = this.props.view;
    toggleContextualMenu(state, dispatch);
  };
}

class CellView extends ReactNodeView {
  private cell: HTMLElement | undefined;

  constructor(props: CellViewProps) {
    super(props.node, props.view, props.getPos, props.portalProviderAPI, props);
  }

  public createDomRef() {
    const { tableCell } = this.view.state.schema.nodes;
    this.cell = document.createElement(`t${this.node.type === tableCell ? 'd' : 'h'}`);
    return this.cell;
  }

  public getContentDOM() {
    const dom = document.createElement('div');
    dom.className = ClassName.TABLE_CELL_NODEVIEW_CONTENT_DOM;
    return { dom };
  }

  public setDomAttrs(node: PMNode) {
    const { cell } = this;
    if (cell) {
      const attrs = setCellAttrs(node, cell);
      (Object.keys(attrs) as Array<keyof typeof attrs>).forEach(attr => {
        const attrValue = attrs[attr];
        cell.setAttribute(attr, attrValue as any);
      });
    }
  }

  public render(props: CellViewProps, forwardRef: ForwardRef) {
    // nodeview does not re-render on selection changes
    // so we trigger render manually to hide/show contextual menu button when `targetCellPosition` is updated
    return (
      <WithPluginState
        plugins={{
          pluginState: pluginKey,
          tableResizingPluginState: tableResizingPluginKey,
          editorDisabledPlugin: editorDisabledPluginKey,
        }}
        editorView={props.view}
        render={({
          pluginState,
          tableResizingPluginState,
          editorDisabledPlugin,
        }: {
          pluginState: TablePluginState;
          tableResizingPluginState: ResizeState;
          editorDisabledPlugin: EditorDisabledPluginState;
        }) => (
          <CellComponent
            forwardRef={forwardRef}
            withCursor={this.getPos() === pluginState.targetCellPosition}
            isResizing={!!tableResizingPluginState && !!tableResizingPluginState.dragging}
            isContextualMenuOpen={!!pluginState.isContextualMenuOpen}
            view={props.view}
            appearance={props.appearance}
            disabled={(editorDisabledPlugin || {}).editorDisabled}
          />
        )}
      />
    );
  }

  public ignoreMutation(record: MutationRecord) {
    // @see https://github.com/ProseMirror/prosemirror/issues/862
    const target = record.target as HTMLElement;
    if (
      record.attributeName === 'class' ||
      (target && closestElement(target, `.${ClassName.CELL_NODEVIEW_WRAPPER}`))
    ) {
      return true;
    }
    return false;
  }
}

export const createCellView = (portalProviderAPI: PortalProviderAPI, appearance?: EditorAppearance) => (
  node: PMNode,
  view: EditorView,
  getPos: () => number,
): NodeView => {
  return new CellView({
    node,
    view,
    getPos,
    portalProviderAPI,
    appearance,
  }).init();
};
