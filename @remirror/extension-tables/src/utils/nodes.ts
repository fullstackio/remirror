import { EditorState, isElementNode, PluginKey, ProsemirrorNode, Selection } from '@remirror/core';
import { TableMap } from 'prosemirror-tables';
import { findTable, hasParentNodeOfType } from 'prosemirror-utils';
import { CELL_ATTRS, TABLE_NUMBER_COLUMN_WIDTH } from '../constants';
import { TableCellNodeAttributes } from '../types';

export const getCellAttributes = (domNode: string | Node, defaultAttributes: TableCellNodeAttributes) => {
  if (!isElementNode(domNode)) {
    return defaultAttributes;
  }
  const widthAttr = domNode.getAttribute('data-colwidth');
  const width =
    widthAttr && /^\d+(,\d+)*$/.test(widthAttr) ? widthAttr.split(',').map(str => Number(str)) : null;
  const colspan = Number(domNode.getAttribute('colspan') || defaultAttributes.colspan);
  const { backgroundColor } = domNode.style;

  return {
    colspan,
    rowspan: Number(domNode.getAttribute('rowspan') || defaultAttributes.rowspan),
    colwidth: width && width.length === colspan ? width : defaultAttributes.colwidth,
    background: backgroundColor && backgroundColor !== defaultAttributes.background ? backgroundColor : null,
  };
};

interface ReturnAttrs {
  colspan?: string;
  rowspan?: string;
  style?: string;
  'data-colwidth'?: string;
}

export const setCellAttributes = (node: ProsemirrorNode, cell?: HTMLElement) => {
  const attrs: ReturnAttrs = {};
  const colspan = cell ? parseInt(cell.getAttribute('colspan') || '1', 10) : 1;
  const rowspan = cell ? parseInt(cell.getAttribute('rowspan') || '1', 10) : 1;

  if (node.attrs.colspan !== colspan) {
    attrs.colspan = node.attrs.colspan;
  }
  if (node.attrs.rowspan !== rowspan) {
    attrs.rowspan = node.attrs.rowspan;
  }

  if (node.attrs.colwidth) {
    attrs['data-colwidth'] = node.attrs.colwidth.join(',');
  }

  if (node.attrs.background) {
    // const { background } = node.attrs;
    // const nodeType = node.type.name;
    // // to ensure that we don't overwrite product's style:
    // // - it clears background color for <th> if its set to gray
    // // - it clears background color for <td> if its set to white
    // const ignored =
    //   (nodeType === 'tableHeader' && background === tableBackgroundColorNames.get('gray')) ||
    //   (nodeType === 'tableCell' && background === tableBackgroundColorNames.get('white'));
    // if (ignored) {
    //   attrs.style = '';
    // } else {
    //   const color = isRgb(background) ? rgbToHex(background) : background;
    //   attrs.style = `${attrs.style || ''}background-color: ${color};`;
    // }
  }

  return attrs as Required<ReturnAttrs>;
};

export function calculateTableColumnWidths(node: ProsemirrorNode): number[] {
  let tableColumnWidths: number[] = [];
  const { isNumberColumnEnabled } = node.attrs;

  node.forEach(rowNode => {
    rowNode.forEach((columnNode, _offset, columnIndex) => {
      let columnWidth = columnNode.attrs.colwidth || [0];

      if (isNumberColumnEnabled && columnIndex === 0) {
        if (!columnWidth) {
          columnWidth = [TABLE_NUMBER_COLUMN_WIDTH];
        }
      }

      // if we have a colwidth attr for this cell, and it contains new
      // colwidths we haven't seen for the whole table yet, add those
      // (colwidths over the table are defined as-we-go)
      if (columnWidth && columnWidth.length + columnIndex > tableColumnWidths.length) {
        tableColumnWidths = tableColumnWidths.slice(0, columnIndex).concat(columnWidth);
      }
    });
  });

  return tableColumnWidths;
}

export const toJSONTableCell = (node: ProsemirrorNode) => ({
  attrs: (Object.keys(node.attrs) as Array<keyof TableCellNodeAttributes>).reduce<Record<string, any>>(
    (obj, key) => {
      if (CELL_ATTRS[key].default !== node.attrs[key]) {
        obj[key] = node.attrs[key];
      }

      return obj;
    },
    {},
  ),
});

export const isIsolating = (node: ProsemirrorNode): boolean => {
  return !!node.type.spec.isolating;
};

export const containsHeaderColumn = (state: EditorState, table: ProsemirrorNode): boolean => {
  const map = TableMap.get(table);
  // Get cell positions for first column.
  const cellPositions = map.cellsInRect({
    left: 0,
    top: 0,
    right: 1,
    bottom: map.height,
  });

  for (const cellPosition of cellPositions) {
    try {
      const cell = table.nodeAt(cellPosition);
      if (cell && cell.type !== state.schema.nodes.tableHeader) {
        return false;
      }
    } catch {
      return false;
    }
  }

  return true;
};

export const containsHeaderRow = (state: EditorState, table: ProsemirrorNode): boolean => {
  const map = TableMap.get(table);
  for (let i = 0; i < map.width; i++) {
    const cell = table.nodeAt(map.map[i]);
    if (cell && cell.type !== state.schema.nodes.tableHeader) {
      return false;
    }
  }
  return true;
};

export function filterNearSelection<T, U>(
  state: EditorState,
  findNode: (selection: Selection) => { pos: number; node: ProsemirrorNode } | undefined,
  predicate: (state: EditorState, node: ProsemirrorNode, pos?: number) => T,
  defaultValue: U,
): T | U {
  const found = findNode(state.selection);
  if (!found) {
    return defaultValue;
  }

  return predicate(state, found.node, found.pos);
}

export const checkIfHeaderColumnEnabled = (state: EditorState): boolean =>
  filterNearSelection(state, findTable, containsHeaderColumn, false);

export const checkIfHeaderRowEnabled = (state: EditorState): boolean =>
  filterNearSelection(state, findTable, containsHeaderRow, false);

export const checkIfNumberColumnEnabled = (state: EditorState): boolean =>
  filterNearSelection(state, findTable, (_, table) => !!table.attrs.isNumberColumnEnabled, false);

export const isLayoutSupported = (state: EditorState, key: PluginKey): boolean => {
  const { permittedLayouts } = key.getState(state).pluginConfig;
  const { bodiedExtension, layoutSection } = state.schema.nodes;

  return (
    !hasParentNodeOfType([layoutSection, bodiedExtension])(state.selection) &&
    permittedLayouts &&
    (permittedLayouts === 'all' ||
      (permittedLayouts.indexOf('default') > -1 &&
        permittedLayouts.indexOf('wide') > -1 &&
        permittedLayouts.indexOf('full-page') > -1))
  );
};

export const getTableWidths = (node: ProsemirrorNode) => {
  if (!node.content.firstChild) {
    return [];
  }

  const tableWidths: number[] = [];
  node.content.firstChild.content.forEach(cell => {
    if (Array.isArray(cell.attrs.colwidth)) {
      const colspan = cell.attrs.colspan || 1;
      tableWidths.push(...cell.attrs.colwidth.slice(0, colspan));
    }
  });

  return tableWidths;
};

export const getTableWidth = (node: ProsemirrorNode) => {
  return getTableWidths(node).reduce((acc, current) => acc + current, 0);
};

export const tablesHaveDifferentColumnWidths = (
  currentTable: ProsemirrorNode,
  previousTable: ProsemirrorNode,
): boolean => {
  const currentTableWidths = getTableWidths(currentTable);
  const previousTableWidths = getTableWidths(previousTable);

  const sameWidths = currentTableWidths.every((value: number, index: number) => {
    return value === previousTableWidths[index];
  });

  return sameWidths === false;
};
