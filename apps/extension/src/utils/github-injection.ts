export const WRAPPER_ELEMENT_CLASS = 'pledge-io-wrapper';

export const mutationRemovedNode = (mutations: MutationRecord[], node: Node) => {
  return mutations.some(({ removedNodes }) => {
    let removed = false;
    removedNodes.forEach(removedNode => {
      console.log('removedNode === node: ' + (removedNode === node), removedNode, node);
      if (removedNode === node) {
        removed = true;
      }
    });
    return removed;
  });
};

export const gitHubInjection = (cb: (firstRun: boolean) => void) => {
  cb(true);

  const allNodes = document.querySelectorAll('[data-pjax-container]');
  const targetNode = allNodes[allNodes.length - 1];
  if (!targetNode) {
    return;
  }
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(() => {
    cb(false);
  });

  observer.observe(targetNode, { childList: true });

  return observer.disconnect;
};

export const createInjectedElement = (tagName: keyof HTMLElementTagNameMap, extraClasses?: string) => {
  const el = document.createElement(tagName);
  el.classList.add(WRAPPER_ELEMENT_CLASS);
  if (extraClasses) {
    el.classList.add(extraClasses);
  }

  return el;
};
