import {
  createDocumentNode,
  Doc,
  EditorState,
  ExtensionManager,
  isObjectNode,
  isProsemirrorNode,
  isString,
  ProsemirrorNode,
  RemirrorContentType,
  SchemaParams,
  Text,
} from '@remirror/core';
import { baseExtensions, BaseKeymap, Composition, History, Placeholder } from '@remirror/core-extensions';
import { CodeBlock } from '@remirror/extension-code-block';
import {
  ManagedRemirrorEditor,
  ManagedRemirrorEditorProps,
  Remirror,
  RemirrorEditor,
  RemirrorEditorProps,
  RemirrorEventListener,
  RemirrorExtension,
  RemirrorManager,
  useRemirror,
} from '@remirror/react';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { fromMarkdown, toMarkdown } from './markdown';

const MarkdownEditor: FC<ManagedRemirrorEditorProps> = props => {
  const [editorState, setEditorState] = useState<EditorState | null>(null);

  const onStateChange = useCallback<RemirrorEventListener>(({ state }) => {
    setEditorState(state);
  }, []);

  return (
    <RemirrorManager useBaseExtensions={false}>
      <RemirrorExtension Constructor={Doc} priority={1} content='block' />
      <RemirrorExtension Constructor={CodeBlock} priority={1} />
      <RemirrorExtension Constructor={Text} priority={1} />
      <RemirrorExtension Constructor={Composition} priority={3} />
      <RemirrorExtension Constructor={History} priority={3} />
      {/* <RemirrorExtension Constructor={Placeholder} priority={3} /> */}
      <RemirrorExtension Constructor={BaseKeymap} priority={1} />
      <ManagedRemirrorEditor {...props} onStateChange={onStateChange} value={editorState} />
    </RemirrorManager>
  );
};

const useWysiwygManager = () => {
  return useMemo(() => ExtensionManager.create([...baseExtensions, new CodeBlock(), new Placeholder()]), []);
};

const WysiwygEditor: FC<RemirrorEditorProps> = props => {
  return (
    <RemirrorEditor {...props}>
      <div />
    </RemirrorEditor>
  );
};

interface CreateInitialContentParams extends SchemaParams {
  /** The content to render */
  content: RemirrorContentType;
}

const createInitialContent = ({ content, schema }: CreateInitialContentParams): Content => {
  if (isString(content)) {
    return {
      markdown: content,
      pmNode: fromMarkdown(content, schema),
    };
  }

  if (isProsemirrorNode(content)) {
    return {
      markdown: toMarkdown(content),
      pmNode: content,
    };
  }

  if (!isObjectNode(content)) {
    throw new Error('Invalid content passed into the editor');
  }

  const pmNode = createDocumentNode({ content, schema });

  return {
    markdown: toMarkdown(pmNode),
    pmNode,
  };
};

export interface EditorProps {
  initialValue?: RemirrorContentType;
  editor: 'markdown' | 'wysiwyg';
}

// const Loading = () => <p>Loading...</p>

interface Content {
  markdown: string;
  pmNode: ProsemirrorNode;
}

export const Editor: FC<EditorProps> = ({ initialValue = '', editor }) => {
  const manager = useWysiwygManager();
  const initialContent = createInitialContent({ content: initialValue, schema: manager.schema });
  const [content, setContent] = useState<Content>(initialContent);
  // const [markdownContent, setMarkdownContent] = useState<string>(initialMarkdown);
  // const [pmContent, setPMContent] = useState<ProsemirrorNode>(createDocumentNode({content: }));
  return editor === 'markdown' ? (
    <MarkdownEditor initialContent={initialContent.markdown} />
  ) : (
    <WysiwygEditor manager={manager} />
  );
};

// So
