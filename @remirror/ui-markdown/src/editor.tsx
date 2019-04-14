import { Doc, Text } from '@remirror/core';
import { BaseKeymap, Composition, History } from '@remirror/core-extensions';
import { CodeBlock } from '@remirror/extension-code-block';
import { ManagedRemirrorEditor, RemirrorExtension, RemirrorManager } from '@remirror/react';
import React, { FC } from 'react';

export const MarkdownEditor: FC = () => {
  return (
    <RemirrorManager useBaseExtensions={false}>
      <RemirrorExtension Constructor={Doc} priority={1} content='block' />
      <RemirrorExtension Constructor={CodeBlock} priority={1} />
      <RemirrorExtension Constructor={Text} priority={1} />
      <RemirrorExtension Constructor={Composition} priority={3} />
      <RemirrorExtension Constructor={History} priority={3} />
      {/* <RemirrorExtension Constructor={Placeholder} priority={3} /> */}
      <ManagedRemirrorEditor />
      <RemirrorExtension Constructor={BaseKeymap} priority={1} />
    </RemirrorManager>
  );
};

export const WysiwygEditor: FC = () => {
  return (
    <RemirrorManager useBaseExtensions={true}>
      <RemirrorExtension Constructor={Doc} priority={1} content='block' />
      <RemirrorExtension Constructor={CodeBlock} priority={1} />
      <RemirrorExtension Constructor={Text} priority={1} />
      <RemirrorExtension Constructor={Composition} priority={3} />
      <RemirrorExtension Constructor={History} priority={3} />
      {/* <RemirrorExtension Constructor={Placeholder} priority={3} /> */}
      <ManagedRemirrorEditor />
      <RemirrorExtension Constructor={BaseKeymap} priority={1} />
    </RemirrorManager>
  );
};
