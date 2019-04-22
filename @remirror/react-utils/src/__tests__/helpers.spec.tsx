import React from 'react';
import { getElementProps } from '../helpers';

test('getElementProps', () => {
  const expected = 'test';
  const Element = <div id={expected} />;
  expect(getElementProps(Element)).toBe(expected);
});
