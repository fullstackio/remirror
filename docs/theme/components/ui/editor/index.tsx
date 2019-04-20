import React, { FC, useCallback, useMemo, useState } from 'react';

import loadable from '@loadable/component';
import { styled } from '@styled';
import { useConfig, UseConfigObj } from 'docz';
import { get } from 'lodash';

import { ClipboardAction } from './elements';

const CodeMirror = loadable(() => import('../codemirror'));

const getLanguage = (children: any) => {
  const defaultLanguage = 'jsx';
  if (typeof children === 'string') {
    return defaultLanguage;
  }

  const language = get(children, 'props.props.className') || defaultLanguage;
  const result = language.replace('language-', '');

  if (result === 'js' || result === 'javascript') {
    return 'jsx';
  }
  if (result === 'ts' || result === 'tsx' || result === 'typescript') {
    return 'text/typescript';
  }
  return result;
};

const getChildren = (children: any) =>
  children && typeof children !== 'string' ? get(children, 'props.children') : children;

const Wrapper = styled.div`
  margin: 30px 0;
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Actions = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  background: transparent;
`;

export interface EditorProps {
  children: any;
  className?: string;
  editorClassName?: string;
  actions?: React.ReactNode;
  readOnly?: boolean;
  mode?: string;
  matchBrackets?: boolean;
  indentUnit?: number;
  onChange?: (code: string) => any;
  language?: string;
  withLastLine?: boolean;
}

export const Editor: FC<EditorProps> = ({
  mode,
  children,
  actions,
  onChange,
  className,
  editorClassName,
  language: defaultLanguage,
  ...props
}) => {
  const config = useConfig();
  const initialCode = useMemo(() => getChildren(children), [children]);
  const [code, setCode] = useState(initialCode);
  const language = defaultLanguage || getLanguage(children);
  const options = {
    ...props,
    tabSize: 2,
    mode: language || mode,
    lineNumbers: true,
    lineWrapping: true,
    autoCloseTags: true,
    theme: 'docz-light',
  };

  const onEditorDidMount = (editor: any) => {
    if (editor) {
      removeLastLine(editor);
    }
  };

  const removeLastLine = useCallback(
    (editor: any) => {
      if (editor && !props.withLastLine && props.readOnly) {
        const lastLine = editor.lastLine();
        editor.doc.replaceRange('', { line: lastLine - 1 }, { line: lastLine });
      }
    },
    [props.withLastLine, props.readOnly],
  );

  const handleChange = useCallback(
    (_editor: any, _data: any, changedCode: string) => {
      if (onChange) {
        onChange(changedCode);
      }
      setCode(changedCode);
    },
    [code],
  );

  const editorProps = (conf: UseConfigObj) => ({
    value: code,
    className: editorClassName,
    editorDidMount: onEditorDidMount,
    onBeforeChange: handleChange,
    options: {
      ...options,
      theme: conf && conf.themeConfig ? conf.themeConfig.codemirrorTheme : options.theme,
    },
  });

  return (
    <Wrapper className={className}>
      <CodeMirror {...editorProps(config)} />
      <Actions>{actions || <ClipboardAction content={code} />}</Actions>
    </Wrapper>
  );
};

Editor.defaultProps = {
  mode: 'js',
  readOnly: true,
  matchBrackets: true,
  indentUnit: 2,
};
