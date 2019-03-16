import { NodeExtension } from '@remirror/core';
import { CELL_ATTRS, DEFAULT_CELL_ATTRS } from './constants';
import { TableHeaderOptions, TableNodeExtensionSpec } from './types';
import { getCellAttributes, setCellAttributes } from './utils';

export class TableHeader extends NodeExtension<TableHeaderOptions> {
  get name(): 'tableHeader' {
    return 'tableHeader';
  }

  get schema(): TableNodeExtensionSpec {
    return {
      tableRole: 'header',
      content:
        '(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaGroup | mediaSingle  | applicationCard | decisionList | taskList | blockCard | extension)+',
      attrs: CELL_ATTRS,
      isolating: true,
      marks: 'alignment',
      parseDOM: [
        {
          tag: 'th',
          getAttrs: dom => getCellAttributes(dom, this.defaultAttributes),
        },
      ],
      toDOM: node => {
        return ['th', setCellAttributes(node), 0];
      },
    };
  }

  private get defaultAttributes() {
    return { ...DEFAULT_CELL_ATTRS, background: 'grey', ...(this.options.defaultAttributes || {}) };
  }

  get defaultOptions() {
    return {};
  }
}
