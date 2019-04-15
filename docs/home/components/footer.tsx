import { styled } from '@styled';
import React from 'react';

import { Logo as BaseLogo } from '@components/ui';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Logo = styled(BaseLogo)`
  margin: 0 10px;
`;

export const Footer = () => (
  <Wrapper>
    <span>Footer goes here</span>
  </Wrapper>
);
