import { createContext } from 'react';

import { Cast, ExtensionManager } from '@remirror/core';
import { InjectedRemirrorProps } from '@remirror/react-utils';

/**
 * Creates a ReactContext for the RemirrorEditor component
 */
export const RemirrorEditorContext = createContext<InjectedRemirrorProps>(Cast<InjectedRemirrorProps>({}));

/**
 * Creates a ReactContext for the RemirrorManager component
 */
export const RemirrorManagerContext = createContext<ExtensionManager>(ExtensionManager.create([]));
