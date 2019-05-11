import React, { createContext, FC, useContext } from 'react';

export type StateHook<GType = any> = () => GType;

// Create context for global store assignment
const HookStateContext = createContext<Map<StateHook, any>>(null);

interface HookStateProviderProps {
  stores: StateHook[];
}

export const HookStateProvider: FC<HookStateProviderProps> = ({ stores, children }) => {
  // map that stores initialized versions of all user store hooks
  const storesMap = new Map();
  // complain if no instances provided for initialization
  if (!stores || !stores.length) {
    throw new Error('You must provide stores list to a <Provider> for initialization!');
  }
  // initialize store hooks
  // this is required because react expects the same number
  // of hooks to be called on each render
  // so if we run init in useStore hook - it'll break on re-render
  stores.forEach(store => {
    storesMap.set(store, store());
  });
  // return provider with stores map
  return <HookStateContext.Provider value={storesMap}>{children}</HookStateContext.Provider>;
};

export function useStore<GType extends StateHook>(hook: GType): ReturnType<GType> {
  const map = useContext(HookStateContext);

  // complain if no map is given
  if (!map) {
    throw new Error('You must wrap your components with a <Provider>!');
  }

  const instance = map.get(hook);

  // complain if instance wasn't initialized
  if (!instance) {
    throw new Error('Provided store instance did not initialize correctly!');
  }

  return instance;
}
