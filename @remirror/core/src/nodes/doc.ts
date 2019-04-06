import { NodeExtension } from '../node-extension';
import { NodeExtensionSpec } from '../types';

export class Doc extends NodeExtension {
  get name() {
    return 'doc' as const;
  }

  get schema(): NodeExtensionSpec {
    return {
      content: 'block+',
    };
  }
}
