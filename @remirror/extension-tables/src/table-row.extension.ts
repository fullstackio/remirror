import { NodeExtension } from '@remirror/core';
import { TableNodeExtensionSpec, TableRowOptions } from './types';

export class TableRow extends NodeExtension<TableRowOptions> {
  get name(): 'tableRow' {
    return 'tableRow';
  }

  get schema(): TableNodeExtensionSpec {
    return {
      content: '(tableCell | tableHeader)+',
      tableRole: 'row',
      parseDOM: [{ tag: 'tr' }],
      toDOM() {
        return ['tr', 0];
      },
    };
  }

  get defaultOptions() {
    return {};
  }
}
