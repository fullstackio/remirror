import {
  ExtensionCommandFunction,
  isElementDOMNode,
  NodeExtension,
  NodeExtensionSpec,
  SchemaNodeTypeParams,
  toggleBlockItem,
} from '@remirror/core';
import refractor from 'refractor/core';
import { SyntaxTheme, syntaxTheme } from './styles';
import { CodeBlockOptions } from './types';

/**
 * The mention extension manages suggestions through onChange, onKeyDown, onExit and onEnter callbacks.
 * It also allows for configuration options to be passed into transforming suggestion queries into a mention
 * node.
 */
export class CodeBlock extends NodeExtension<CodeBlockOptions> {
  get name() {
    return 'codeBlock' as const;
  }

  /**
   * Provide the default options for this extension
   */
  get defaultOptions() {
    return {
      supportedLanguages: [],
      syntaxTheme: 'atomDark' as SyntaxTheme,
    };
  }

  /**
   * Register the configured languages.
   */
  protected init() {
    super.init();
    for (const language of this.options.supportedLanguages) {
      refractor.register(language);
    }
  }

  /**
   * Provides the codeBlock schema.
   */
  get schema(): NodeExtensionSpec {
    const dataAttribute = 'data-code-block-language';
    return {
      attrs: {
        ...this.extraAttrs(),
        language: { default: 'markup' },
      },
      content: 'text*',
      marks: '',
      group: 'block',
      code: true,
      defining: true,
      draggable: false,
      parseDOM: [
        {
          tag: 'pre',
          preserveWhitespace: 'full',
          getAttrs: dom => {
            if (!isElementDOMNode(dom)) {
              return false;
            }

            const language = dom.getAttribute(dataAttribute);
            return { language };
          },
        },
      ],
      toDOM: node => {
        const { language, ...rest } = node.attrs;
        const attrs = { ...rest, class: `language-${language}`, [dataAttribute]: language };

        return ['pre', ['code', attrs, 0]];
      },
    };
  }

  public styles() {
    const { syntaxTheme: theme } = this.options;
    if (theme) {
      return syntaxTheme[theme];
    }
  }

  public commands({ type, schema }: SchemaNodeTypeParams): ExtensionCommandFunction {
    return () => toggleBlockItem({ type, toggleType: schema.nodes.paragraph });
  }
}
