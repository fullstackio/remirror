import React, { FC } from 'react';

import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@styled';
import copy from 'copy-text-to-clipboard';
import rgba from 'polished/lib/color/rgba';

import { ButtonSwap } from './button-swap';

export const ActionButton = styled(ButtonSwap)`
  padding: 4px;
  background: transparent;
  font-size: 12px;
  text-transform: uppercase;
  transition: color 0.3s;
  &,
  & a {
    color: ${({ theme }) => rgba(theme.colors.text, 0.4)};
  }
  &:hover,
  & a:hover {
    color: ${({ theme }) => rgba(theme.colors.text, 0.7)};
  }
`;

interface ClipboardActionProps {
  content: string;
}

export const ClipboardAction: FC<ClipboardActionProps> = ({ content, ...props }) => {
  const onClick = () => copy(content);

  return (
    <ActionButton
      {...props}
      title='Copy to clipboard'
      onClick={onClick}
      swap={<FontAwesomeIcon icon={faClipboardCheck} />}
    >
      <FontAwesomeIcon icon={faClipboard} />
    </ActionButton>
  );
};
