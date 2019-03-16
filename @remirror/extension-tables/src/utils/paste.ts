import { EditorSchema, Fragment, ProsemirrorNode } from '@remirror/core';
import { Slice } from 'prosemirror-model';
import { flatten } from 'prosemirror-utils';
import { flatMap } from './slice';

// lifts up the content of each cell, returning an array of nodes
export const unwrapContentFromTable = (maybeTable: ProsemirrorNode): ProsemirrorNode | ProsemirrorNode[] => {
  const { schema } = maybeTable.type;
  if (maybeTable.type === schema.nodes.table) {
    const content: ProsemirrorNode[] = [];
    const { tableCell, tableHeader } = schema.nodes;
    maybeTable.descendants(maybeCell => {
      if (maybeCell.type === tableCell || maybeCell.type === tableHeader) {
        content.push(...flatten(maybeCell, false).map(child => child.node));
      }
      return true;
    });
    return content;
  }
  return maybeTable;
};

export const removeTableFromFirstChild = (
  node: ProsemirrorNode,
  index: number,
): ProsemirrorNode | ProsemirrorNode[] => {
  return index === 0 ? unwrapContentFromTable(node) : node;
};

export const removeTableFromLastChild = (
  node: ProsemirrorNode,
  index: number,
  fragment: Fragment,
): ProsemirrorNode | ProsemirrorNode[] => {
  return index === fragment.childCount - 1 ? unwrapContentFromTable(node) : node;
};

export const transformSliceToRemoveOpenTable = (slice: Slice, schema: EditorSchema): Slice => {
  // we're removing the table, tableRow and tableCell reducing the open depth by 3
  const depthDecrement = 3;

  // Case 1: A slice entirely within a single CELL
  if (
    // starts and ends inside of a cell
    slice.openStart >= 4 &&
    slice.openEnd >= 4 &&
    // slice is a table node
    slice.content.childCount === 1 &&
    slice.content.firstChild!.type === schema.nodes.table
  ) {
    return new Slice(
      flatMap(slice.content, unwrapContentFromTable),
      slice.openStart - depthDecrement,
      slice.openEnd - depthDecrement,
    );
  }

  // Case 2: A slice starting inside a table and finishing outside
  // slice.openStart can only be >= 4 if its a TextSelection. CellSelection would give openStart = 1
  if (slice.openStart >= 4 && slice.content.firstChild!.type === schema.nodes.table) {
    return new Slice(
      flatMap(slice.content, removeTableFromFirstChild),
      slice.openStart - depthDecrement,
      slice.openEnd,
    );
  }

  // Case 3: A slice starting outside a table and finishing inside
  if (slice.openEnd >= 4 && slice.content.lastChild!.type === schema.nodes.table) {
    return new Slice(
      flatMap(slice.content, removeTableFromLastChild),
      slice.openStart,
      slice.openEnd - depthDecrement,
    );
  }

  return slice;
};
