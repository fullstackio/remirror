import {
  ExtensionCommandFunction,
  NodeExtension,
  NodeExtensionSpec,
  SchemaNodeTypeParams,
  toggleBlockItem,
} from '@remirror/core';
import { CodeBlockOptions } from './types';

/**
 * The mention extension manages suggestions through onChange, onKeyDown, onExit and onEnter callbacks.
 * It also allows for configuration options to be passed into transforming suggestion queries into a mention
 * node.
 */
export class CodeBlock extends NodeExtension<CodeBlockOptions> {
  /**
   * The name is dynamically generated based on the passed in name.
   * It must start with 'mention'
   */
  get name() {
    return 'codeBlock' as const;
  }

  /**
   * Provide the default options for this extension
   */
  get defaultOptions() {
    return {};
  }

  get schema(): NodeExtensionSpec {
    return {
      attrs: {
        language: {},
      },
      content: 'text*',
      marks: '',
      group: 'block',
      code: true,
      defining: true,
      draggable: false,
      parseDOM: [{ tag: 'pre', preserveWhitespace: 'full' }],
      toDOM: () => ['pre', ['code', 0]],
    };
  }

  public commands({ type, schema }: SchemaNodeTypeParams): ExtensionCommandFunction {
    return () => toggleBlockItem({ type, toggleType: schema.nodes.paragraph });
  }
}
