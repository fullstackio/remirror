import { styled } from '@styled';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Footer = () => (
  <Wrapper>
    <span>Footer goes here</span>
  </Wrapper>
);
