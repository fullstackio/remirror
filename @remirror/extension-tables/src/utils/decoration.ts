import { Decoration, DecorationSet } from 'prosemirror-view';
import { TableClassNames, TableDecorations } from '../constants';
import { Cell } from '../types';

export const createControlsHoverDecoration = (cells: Cell[], danger?: boolean): Decoration[] => {
  const deco = cells.map(cell => {
    const classes = [TableClassNames.HOVERED_CELL];
    if (danger) {
      classes.push('danger');
    }

    return Decoration.node(
      cell.pos,
      cell.pos + cell.node.nodeSize,
      {
        class: classes.join(' '),
      },
      { key: TableDecorations.CONTROLS_HOVER },
    );
  });

  return deco;
};

export const findControlsHoverDecoration = (decorationSet: DecorationSet): Decoration[] =>
  decorationSet.find(undefined, undefined, spec => spec.key === TableDecorations.CONTROLS_HOVER);
