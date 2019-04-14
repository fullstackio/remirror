import React, { createContext, FC, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { styled } from '@styled';
import { breakpoints } from '@styles/responsive';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const mainContext = createContext<any>(null);

export const Main: FC = ({ children }) => {
  const [showing, setShowing] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const body = document.querySelector('body');
      const method = showing ? 'add' : 'remove';
      if (body) {
        body.classList[method]('with-overlay');
      }
    }
  }, [showing]);

  useEffect(() => {
    if (width > breakpoints.tablet) {
      const body = document.querySelector('body');
      if (body) {
        body.classList.remove('with-overlay');
      }
      setShowing(false);
    }
  }, [width]);

  return (
    <mainContext.Provider value={{ showing, setShowing }}>
      <Wrapper>{children}</Wrapper>
    </mainContext.Provider>
  );
};
