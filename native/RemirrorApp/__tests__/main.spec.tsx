import React from 'react';
import 'react-native';
import Entry from '../src/entry';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  renderer.create(<Entry />);
});
