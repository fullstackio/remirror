import React from 'react';

import { styled } from '@styled';
import { breakpoints } from '@styles/responsive';
import { useWindowSize } from 'react-use';
import { Main, Sidebar } from '../shared';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;
`;

export const NotFound = () => {
  const { width } = useWindowSize();
  const mobile = width <= breakpoints.tablet;

  return (
    <Main>
      <Sidebar mobile={mobile} />
      <Wrapper>
        <Title>Page Not Found</Title>
        <Subtitle>Check if you haven't changed the document route or deleted it!</Subtitle>
      </Wrapper>
    </Main>
  );
};
