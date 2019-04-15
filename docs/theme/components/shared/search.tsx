import React, { ChangeEventHandler, FC } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { callIfDefined } from '@remirror/core';
import { DocsTheme, styled, useTheme } from '@styled';

interface Props {
  theme: DocsTheme;
}

const sidebarBorder = ({ theme }: Props) => theme.colors.sidebarBorder || '#CED4DE';
const sidebarText = ({ theme }: Props) => theme.colors.sidebarText || '#13161F';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 24px;
  margin-bottom: 20px;
  border-top: 1px dotted ${sidebarBorder};
  border-bottom: 1px dotted ${sidebarBorder};
  opacity: 1;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  font-size: 16px;
  color: ${sidebarText};
`;

interface SearchProps {
  onSearch: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    callIfDefined(onSearch, event.target.value);
  };

  const { colors } = useTheme();

  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSearch} color={colors.sidebarText} />
      <Input type='text' placeholder='Search here...' onChange={onChange} />
    </Wrapper>
  );
};
