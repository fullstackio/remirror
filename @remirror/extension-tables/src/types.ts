import {
  DecorationSet,
  NodeExtensionOptions,
  NodeExtensionSpec,
  ProsemirrorNode,
  Transaction,
} from '@remirror/core';

export interface TableOptions extends NodeExtensionOptions {}
export interface TableCellOptions extends NodeExtensionOptions {
  defaultAttributes?: Partial<TableCellNodeAttributes>;
}
export interface TableRowOptions extends NodeExtensionOptions {}
export interface TableHeaderOptions extends TableCellOptions {}

export interface TableNodeAttributes {
  isNumberColumnEnabled?: boolean;
  layout?: TableLayout;
  autoSize?: boolean;
}

export interface TableCellNodeAttributes {
  colspan: number;
  rowspan: number;
  colwidth: number[] | null;
  background: string | null;
}

export type TableLayout = 'default' | 'full-width' | 'wide';

export type TableRole = 'table' | 'cell' | 'row' | 'header';

export interface TableNodeExtensionSpec extends NodeExtensionSpec {
  tableRole: TableRole;
}

export type PermittedLayoutsDescriptor = TableLayout[] | 'all';
export interface Cell {
  pos: number;
  start: number;
  node: ProsemirrorNode;
}
export type CellTransform = (cell: Cell) => (tr: Transaction) => Transaction;

export interface PluginConfig {
  advanced?: boolean;
  allowBackgroundColor?: boolean;
  allowColumnResizing?: boolean;
  allowHeaderColumn?: boolean;
  allowHeaderRow?: boolean;
  allowMergeCells?: boolean;
  allowNumberColumn?: boolean;
  isHeaderRowRequired?: boolean;
  stickToolbarToBottom?: boolean;
  permittedLayouts?: PermittedLayoutsDescriptor;
  allowControls?: boolean;
}

export interface TablePluginState {
  decorationSet: DecorationSet;
  editorHasFocus?: boolean;
  hoveredColumns: number[];
  hoveredRows: number[];
  pluginConfig: PluginConfig;
  // position of a cell PM node that has cursor
  targetCellPosition?: number;
  // controls need to be re-rendered when table content changes
  // e.g. when pressing enter inside of a cell, it creates a new p and we need to update row controls
  tableNode?: ProsemirrorNode;
  tableRef?: HTMLElement;
  tableFloatingToolbarTarget?: HTMLElement;
  isContextualMenuOpen?: boolean;
  isInDanger?: boolean;
  insertColumnButtonIndex?: number;
  insertRowButtonIndex?: number;
}

export interface CellRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface ColumnResizingPlugin {
  handleWidth?: number;
  cellMinWidth?: number;
  lastColumnResizable?: boolean;
  dynamicTextSizing?: boolean;
}

export enum Actions {
  SET_EDITOR_FOCUS = 'SET_EDITOR_FOCUS',
  SET_TABLE_REF = 'SET_TABLE_REF',
  SET_TARGET_CELL_POSITION = 'SET_TARGET_CELL_POSITION',
  CLEAR_HOVER_SELECTION = 'CLEAR_HOVER_SELECTION',
  HOVER_COLUMNS = 'HOVER_COLUMNS',
  HOVER_ROWS = 'HOVER_ROWS',
  HOVER_TABLE = 'HOVER_TABLE',
  TOGGLE_CONTEXTUAL_MENU = 'TOGGLE_CONTEXTUAL_MENU',
  SHOW_INSERT_COLUMN_BUTTON = 'SHOW_INSERT_COLUMN_BUTTON',
  SHOW_INSERT_ROW_BUTTON = 'SHOW_INSERT_ROW_BUTTON',
  HIDE_INSERT_COLUMN_OR_ROW_BUTTON = 'HIDE_INSERT_COLUMN_OR_ROW_BUTTON',
}
