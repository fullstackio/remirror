import { closestElement } from '@remirror/core';
import { TableClassNames } from '../constants';

export const isInsertColumnButton = (node: HTMLElement) => {
  const cl = node.classList;
  return (
    cl.contains(TableClassNames.CONTROLS_INSERT_COLUMN) ||
    closestElement(node, `.${TableClassNames.CONTROLS_INSERT_COLUMN}`) ||
    (cl.contains(TableClassNames.CONTROLS_BUTTON_OVERLAY) &&
      closestElement(node, `.${TableClassNames.COLUMN_CONTROLS}`))
  );
};

export const isInsertRowButton = (node: HTMLElement) => {
  const cl = node.classList;
  return (
    cl.contains(TableClassNames.CONTROLS_INSERT_ROW) ||
    closestElement(node, `.${TableClassNames.CONTROLS_INSERT_ROW}`) ||
    (cl.contains(TableClassNames.CONTROLS_BUTTON_OVERLAY) &&
      closestElement(node, `.${TableClassNames.ROW_CONTROLS}`))
  );
};

export const getIndex = (target: HTMLElement) => parseInt(target.getAttribute('data-index') || '-1', 10);
