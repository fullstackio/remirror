import { render, unmountComponentAtNode } from 'react-dom';

import { Omit } from '@remirror/core';
import ContentScriptContainer from '../../app/containers/content-script.container';
import { ElementsObject, InjectedContentProps } from '../../app/containers/types';
import { WRAPPER_ELEMENT_CLASS } from '../../utils/github-injection';
import { injectExtensionContext } from '../../utils/inject-context';

const ROOT_NODE_ID = 'remirror-root-content-node';

const findElements = (): ElementsObject => {
  return {
    topBarRepo: document.querySelector('.pagehead-actions>li'),
    userProfile: document.querySelector('.user-profile-following-container'),
  };
};

type SimpleInjectedContentProps = Omit<InjectedContentProps, 'elements'>;

const createContainerElement = () => {
  const container = document.createElement('div');
  container.id = ROOT_NODE_ID;
  document.body.appendChild(container);
  return container;
};

export class ContentDOM {
  private container: Element;
  private props: SimpleInjectedContentProps;

  constructor(props: SimpleInjectedContentProps) {
    this.container = createContainerElement();
    this.props = props;
    this.render();
  }

  private render() {
    render(
      injectExtensionContext(ContentScriptContainer, { elements: findElements(), ...this.props }),
      this.container,
    );
  }

  public updateProps(props: SimpleInjectedContentProps) {
    this.props = props;
    this.render();
  }

  public reset = () => {
    // Check if the toplevel container has been removed
    if (this.container !== document.getElementById(ROOT_NODE_ID)) {
      this.destroy();
      this.container = createContainerElement();
    }

    // Remove all the previous nodes
    // This will trigger all the portals to create ne fragments for storing the updated state.
    document.querySelectorAll(`.${WRAPPER_ELEMENT_CLASS}`).forEach(el => {
      console.log('manually deleting stuff');
      el.parentNode!.removeChild(el);
    });

    this.render();
  };

  public destroy = () => {
    unmountComponentAtNode(this.container);
  };
}
