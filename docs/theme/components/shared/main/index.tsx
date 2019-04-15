import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { styled } from '@styled';
import { breakpoints } from '@styles/responsive';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export interface MainContextValue {
  showing: boolean;
  setShowing: Dispatch<SetStateAction<boolean>>;
}
export const MainContext = createContext<MainContextValue>({
  showing: false,
  setShowing: (_val: SetStateAction<boolean>) => {},
});

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
    <MainContext.Provider value={{ showing, setShowing }}>
      <Wrapper>{children}</Wrapper>
    </MainContext.Provider>
  );
};
