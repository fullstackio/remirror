## API Report File for "@remirror/extension-image"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { CommandFunction } from '@remirror/core';
import { CommandNodeTypeParams } from '@remirror/core';
import { NodeExtension } from '@remirror/core';
import { NodeExtensionSpec } from '@remirror/core';

// @public (undocumented)
export class ImageExtension extends NodeExtension {
    get name(): "image";
    get schema(): NodeExtensionSpec;
    // (undocumented)
    commands({ type }: CommandNodeTypeParams): {
        insertImage: (attrs?: Record<string, unknown> | undefined) => CommandFunction<any>;
    };
    // (undocumented)
    plugin(): import("prosemirror-state").Plugin<any, any>;
}


// (No @packageDocumentation comment for this package)

```
