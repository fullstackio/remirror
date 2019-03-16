import { TableCellNodeAttributes } from './types';

export const DEFAULT_CELL_ATTRS: TableCellNodeAttributes = {
  colspan: 1,
  rowspan: 1,
  colwidth: null,
  background: null,
};

export const CELL_ATTRS = {
  colspan: { default: DEFAULT_CELL_ATTRS.colspan },
  rowspan: { default: DEFAULT_CELL_ATTRS.rowspan },
  colwidth: { default: DEFAULT_CELL_ATTRS.colwidth },
  background: { default: DEFAULT_CELL_ATTRS.background },
};

export const TABLE_NUMBER_COLUMN_WIDTH = 42;

export const TableDecorations = {
  CONTROLS_HOVER: 'CONTROLS_HOVER',
};
const TABLE_CLASS_PREFIX = 'remirror-table-';

export const TableClassNames = {
  TABLE_CONTAINER: `${TABLE_CLASS_PREFIX}container`,
  TABLE_NODE_WRAPPER: `${TABLE_CLASS_PREFIX}wrapper`,
  TABLE_LEFT_SHADOW: `${TABLE_CLASS_PREFIX}with-left-shadow`,
  TABLE_RIGHT_SHADOW: `${TABLE_CLASS_PREFIX}with-right-shadow`,
  TABLE_CELL_NODEVIEW_CONTENT_DOM: `${TABLE_CLASS_PREFIX}cell-nodeview-content-dom`,

  COLUMN_CONTROLS_WRAPPER: `${TABLE_CLASS_PREFIX}column-controls-wrapper`,
  COLUMN_CONTROLS: `${TABLE_CLASS_PREFIX}column-controls`,
  COLUMN_CONTROLS_INNER: `${TABLE_CLASS_PREFIX}column-controls__inner`,
  COLUMN_CONTROLS_BUTTON_WRAP: `${TABLE_CLASS_PREFIX}column-controls__button-wrap`,

  ROW_CONTROLS_WRAPPER: `${TABLE_CLASS_PREFIX}row-controls-wrapper`,
  ROW_CONTROLS: `${TABLE_CLASS_PREFIX}row-controls`,
  ROW_CONTROLS_INNER: `${TABLE_CLASS_PREFIX}row-controls__inner`,
  ROW_CONTROLS_BUTTON_WRAP: `${TABLE_CLASS_PREFIX}row-controls__button-wrap`,

  CONTROLS_BUTTON: `${TABLE_CLASS_PREFIX}controls__button`,
  CONTROLS_BUTTON_ICON: `${TABLE_CLASS_PREFIX}controls__button-icon`,

  CONTROLS_INSERT_BUTTON: `${TABLE_CLASS_PREFIX}controls__insert-button`,
  CONTROLS_INSERT_BUTTON_INNER: `${TABLE_CLASS_PREFIX}controls__insert-button-inner`,
  CONTROLS_INSERT_BUTTON_WRAP: `${TABLE_CLASS_PREFIX}controls__insert-button-wrap`,
  CONTROLS_INSERT_LINE: `${TABLE_CLASS_PREFIX}controls__insert-line`,
  CONTROLS_BUTTON_OVERLAY: `${TABLE_CLASS_PREFIX}controls__button-overlay`,
  LAYOUT_BUTTON: `${TABLE_CLASS_PREFIX}layout-button`,

  CONTROLS_INSERT_MARKER: `${TABLE_CLASS_PREFIX}controls__insert-marker`,
  CONTROLS_INSERT_COLUMN: `${TABLE_CLASS_PREFIX}controls__insert-column`,
  CONTROLS_INSERT_ROW: `${TABLE_CLASS_PREFIX}controls__insert-row`,
  CONTROLS_DELETE_BUTTON_WRAP: `${TABLE_CLASS_PREFIX}controls__delete-button-wrap`,
  CONTROLS_DELETE_BUTTON: `${TABLE_CLASS_PREFIX}controls__delete-button`,

  CORNER_CONTROLS: `${TABLE_CLASS_PREFIX}corner-controls`,
  CONTROLS_CORNER_BUTTON: `${TABLE_CLASS_PREFIX}corner-button`,

  NUMBERED_COLUMN: `${TABLE_CLASS_PREFIX}numbered-column`,
  NUMBERED_COLUMN_BUTTON: `${TABLE_CLASS_PREFIX}numbered-column__button`,

  HOVERED_CELL: `${TABLE_CLASS_PREFIX}hovered-cell`,
  WITH_CONTROLS: `${TABLE_CLASS_PREFIX}with-controls`,
  RESIZING_PLUGIN: `${TABLE_CLASS_PREFIX}resizing-plugin`,
  RESIZE_CURSOR: `${TABLE_CLASS_PREFIX}resize-cursor`,
  IS_RESIZING: `${TABLE_CLASS_PREFIX}is-resizing`,

  CONTEXTUAL_SUBMENU: `${TABLE_CLASS_PREFIX}contextual-submenu`,
  CONTEXTUAL_MENU_BUTTON_WRAP: `${TABLE_CLASS_PREFIX}contextual-menu-button-wrap`,
  CONTEXTUAL_MENU_BUTTON: `${TABLE_CLASS_PREFIX}contextual-menu-button`,
  CONTEXTUAL_MENU_ICON: `${TABLE_CLASS_PREFIX}contextual-submenu-icon`,

  CELL_NODEVIEW_WRAPPER: `${TABLE_CLASS_PREFIX}cell-nodeview-wrapper`,

  // come from prosemirror-table
  COLUMN_RESIZE_HANDLE: 'column-resize-handle',
  SELECTED_CELL: 'selectedCell',

  // defined in ReactNodeView based on PM node name
  NODEVIEW_WRAPPER: 'tableView-content-wrap',
  TABLE_HEADER_NODE_WRAPPER: 'tableHeaderView-content-wrap',
  TABLE_CELL_NODE_WRAPPER: 'tableCellView-content-wrap',

  TOP_LEFT_CELL: 'table > tbody > tr:nth-child(2) > td:nth-child(1)',
};

export const defaultMessages = {
  insertColumn: 'Insert column',
  removeColumns: 'Remove columns',
  insertRow: 'Insert row',
  removeRows: 'Remove rows',
  cellOptions: 'Cell options',
};
