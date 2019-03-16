import { isElementNode, NodeExtension, ProsemirrorNode } from '@remirror/core';
import { TableNodeExtensionSpec, TableOptions } from './types';
import { defaultStyles } from './theme/style';

export class Table extends NodeExtension<TableOptions> {
  get name(): 'table' {
    return 'table';
  }

  get schema(): TableNodeExtensionSpec {
    return {
      content: 'tableRow+',
      attrs: {
        isNumberColumnEnabled: { default: false },
        layout: { default: 'default' },
        autoSize: { default: false },
      },
      tableRole: 'table',
      isolating: true,
      selectable: false,
      group: 'block',
      parseDOM: [
        {
          tag: 'table',
          getAttrs: dom => ({
            isNumberColumnEnabled:
              isElementNode(dom) && dom.getAttribute('data-number-column') === 'true' ? true : false,
            layout: isElementNode(dom) ? dom.getAttribute('data-layout') || 'default' : 'default',
            autoSize: isElementNode(dom) && dom.getAttribute('data-autosize') === 'true' ? true : false,
          }),
        },
      ],
      toDOM(node: ProsemirrorNode) {
        const attrs = {
          'data-number-column': node.attrs.isNumberColumnEnabled,
          'data-layout': node.attrs.layout,
          'data-autosize': node.attrs.autoSize,
        };
        return ['table', attrs, ['tbody', 0]];
      },
    };
  }

  get defaultOptions() {
    return {};
  }

  public styles() {
    return defaultStyles;
  }
}
