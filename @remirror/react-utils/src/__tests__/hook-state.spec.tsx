import React, { Dispatch, SetStateAction, useState } from 'react';
import { act, renderHook } from 'react-hooks-testing-library';
import { fireEvent, render } from 'react-testing-library';
import { HookStateProvider, useStore } from '../hook-state';

const counterStore = () => {
  const [count, setCount] = useState(0);

  const increment = (amount = 1) => setCount(count + amount);
  const decrement = (amount = 1) => setCount(count - amount);

  return { count, setCount, increment, decrement };
};

const Counter = () => {
  const { count, setCount, increment, decrement } = useStore(counterStore);

  const updateState = () => setCount(100);

  const onDecrement = () => decrement();
  const onIncrement = () => increment();

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
      <button onClick={updateState}>set</button>
    </div>
  );
};

const brokenStore = () => undefined;

const BrokenCounter = () => {
  // @ts-ignore
  const { state } = useStore(brokenStore);
  return <div>{state}</div>;
};

test('should increase/decrease state counter in hook', () => {
  let count;
  let setCount: Dispatch<SetStateAction<number>>;
  renderHook(() => ({ count, setCount } = counterStore()));

  expect(count).toBe(0);

  act(() => {
    setCount(1);
  });
  expect(count).toBe(1);
});

test('should increase/decrease state counter in container', () => {
  const { getByText } = render(
    <HookStateProvider stores={[counterStore]}>
      <Counter />
    </HookStateProvider>,
  );

  expect(getByText(/^Count:/).textContent).toBe('Count: 0');

  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('+'));
  expect(getByText(/^Count:/).textContent).toBe('Count: 2');

  fireEvent.click(getByText('-'));
  expect(getByText(/^Count:/).textContent).toBe('Count: 1');

  fireEvent.click(getByText('set'));
  expect(getByText(/^Count:/).textContent).toBe('Count: 100');
});

test('should throw error when no provider is given', () => {
  spyOn(console, 'error');
  expect(() => render(<Counter />)).toThrowError('You must wrap your components with a <Provider>!');
});

test('should throw error when no stores are given to provider', () => {
  spyOn(console, 'error');
  expect(() =>
    render(
      <HookStateProvider stores={[]}>
        <Counter />
      </HookStateProvider>,
    ),
  ).toThrowError('You must provide stores list to a <Provider> for initialization!');
});

test('should throw error when store init fails', () => {
  spyOn(console, 'error');
  expect(() =>
    render(
      <HookStateProvider stores={[brokenStore]}>
        <BrokenCounter />
      </HookStateProvider>,
    ),
  ).toThrowError('Provided store instance did not initialize correctly!');
});
