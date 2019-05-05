const ignore = [
  '**/__tests__',
  '**/__mocks__',
  '**/__fixtures__',
  '*.{test,spec}.{ts,tsx}',
  '**/*.d.ts',
  '*.d.ts',
];

const presets = [
  '@babel/preset-env',
  '@babel/preset-typescript',
  '@babel/preset-react',
  '@emotion/babel-preset-css-prop',
];

const testBabelPresetEnv = ['@babel/preset-env', { targets: { node: '8' } }];
const nonTestEnv = { ignore, presets };

module.exports = {
  presets: [testBabelPresetEnv, '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-typescript', // This is needed so that abstract classes are properly compiled
    ['@babel/plugin-transform-runtime', { regenerator: false }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
  ],
  env: { production: nonTestEnv, development: nonTestEnv },
};
