import { NodeExtension } from '@remirror/core';
import { CELL_ATTRS, DEFAULT_CELL_ATTRS } from './constants';
import { TableCellOptions, TableNodeExtensionSpec } from './types';
import { getCellAttributes, setCellAttributes } from './utils';

export class TableCell extends NodeExtension<TableCellOptions> {
  get name(): 'table' {
    return 'table';
  }

  get schema(): TableNodeExtensionSpec {
    return {
      content:
        '(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock |  mediaGroup | mediaSingle | applicationCard | decisionList | taskList | blockCard | extension | unsupportedBlock)+',
      attrs: CELL_ATTRS,
      tableRole: 'cell',
      marks: 'alignment',
      isolating: true,
      parseDOM: [
        // Ignore number cell copied from renderer
        {
          tag: '.ak-renderer-table-number-column',
          ignore: true,
        },
        {
          tag: 'td',
          getAttrs: dom => getCellAttributes(dom, this.defaultAttributes),
        },
      ],
      toDOM: node => {
        return ['td', setCellAttributes(node), 0];
      },
    };
  }

  private get defaultAttributes() {
    return { ...DEFAULT_CELL_ATTRS, ...(this.options.defaultAttributes || {}) };
  }

  get defaultOptions() {
    return {};
  }
}
