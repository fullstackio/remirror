import React, { ComponentType, createContext, useContext } from 'react';
import { hot } from 'react-hot-loader';

export const ExtensionContext = createContext<any>({});

export const injectExtensionContext = <T extends {}>(Component: ComponentType<T>, props: T) => {
  const HotComponent = hot(module)(Component);
  return (
    <ExtensionContext.Provider value={{}}>
      <HotComponent {...props} />
    </ExtensionContext.Provider>
  );
};

export const useExtensionContext = () => {
  return useContext(ExtensionContext);
};
