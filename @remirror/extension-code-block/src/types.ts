import { NodeExtensionOptions } from '@remirror/core';
import { RefractorSyntax } from 'refractor/core';

export interface CodeBlockOptions extends NodeExtensionOptions {
  /**
   * Import languages from refractor
   * ```ts
   * import jsx from 'refractor/lang/jsx'
   * import typescript from 'refractor/lang/typescript'
   * ```
   *
   * And pass them into the config when initializing this extension.
   * ```ts
   * import { CodeBlock } from '@remirror/extension-code-block';
   *
   * new CodeBlock({ supportedLanguages: [typescript, jsx] })
   *
   * // Or in JSX
   * <RemirrorManager>
   *   <RemirrorExtension Constructor={CodeBlock} supportedLanguages={[typescript, jsx]} />
   * </RemirrorManager>
   * ```
   */
  supportedLanguages?: RefractorSyntax[];
}
