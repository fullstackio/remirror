import React, { FC, useState } from 'react';

import { NodeExtension, NodeExtensionOptions, NodeExtensionSpec } from '@remirror/core';
import { BoldExtension, ItalicExtension, UnderlineExtension } from '@remirror/core-extensions';
import {
  ManagedRemirrorProvider,
  RemirrorEventListener,
  RemirrorExtension,
  RemirrorManager,
  useRemirror,
} from '@remirror/react';

export class FooExtension extends NodeExtension<NodeExtensionOptions, 'foo', {}> {
  get name() {
    return 'foo';
  }

  get schema(): NodeExtensionSpec {
    return {
      attrs: {
        ...this.extraAttrs(),
      },
      content: 'block*',
      group: 'block',
      parseDOM: [
        {
          tag: 'div[data-foo-type]',
        },
      ],
      toDOM() {
        const attrs = {
          'data-foo-type': 'true',
        };
        return ['div', attrs, ['div', { class: 'inside' }, 0]];
      },
    };
  }
}

const InnerEditor: FC = () => {
  const { getRootProps } = useRemirror();
  return (
    <>
      <div {...getRootProps()}></div>;
    </>
  );
};

export default () => {
  const [json, setJson] = useState(JSON.stringify(initialJson, null, 2));

  const onChange: RemirrorEventListener = ({ getJSON }) => {
    const newJson = JSON.stringify(getJSON(), null, 2);
    setJson(newJson);
  };

  return (
    <div
      style={{
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: '"editor" "json"',
      }}
    >
      <div style={{ gridArea: 'editor' }}>
        <RemirrorManager placeholder='Start typing for magic...'>
          <RemirrorExtension Constructor={BoldExtension} />
          <RemirrorExtension Constructor={ItalicExtension} />
          <RemirrorExtension Constructor={UnderlineExtension} />
          <RemirrorExtension Constructor={FooExtension} />
          <ManagedRemirrorProvider
            attributes={{ 'data-testid': 'editor-instance' }}
            onChange={onChange}
            autoFocus={true}
            initialContent={initialJson}
          >
            <InnerEditor />
          </ManagedRemirrorProvider>
        </RemirrorManager>
      </div>
      <div>
        <pre
          style={{
            width: '100%',
            height: '50%',
            overflowY: 'auto',
            padding: '1em',
            background: 'black',
            color: 'lawngreen',
          }}
        >
          {json}
        </pre>
      </div>
    </div>
  );
};

const initialJson = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Better docs to come soon...',
        },
      ],
    },
    {
      type: 'paragraph',
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'However for now it is important that something is in place.',
        },
      ],
    },
    {
      type: 'foo',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This is the foo thing',
            },
          ],
        },
      ],
    },
  ],
};
