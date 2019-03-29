const defaultConfig = require('../support/babel/base.babel');
const path = require('path');

module.exports = {
  ...defaultConfig,
  presets: ['@emotion/babel-preset-css-prop'],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    [
      'module-resolver',
      {
        alias: {
          '@remirror/core': '../@remirror/core/src',
          '@remirror/core-extensions': '../@remirror/core-extensions/src',
          '@remirror/extension-emoji': '../@remirror/extension-emoji/src',
          '@remirror/extension-enhanced-link': '../@remirror/extension-enhanced-link/src',
          '@remirror/extension-epic-mode': '../@remirror/extension-epic-mode/src',
          '@remirror/extension-mention': '../@remirror/extension-mention/src',
          '@remirror/react': '../@remirror/react/src',
          '@remirror/react-ssr': '../@remirror/react-ssr/src',
          '@remirror/renderer-react': '../@remirror/renderer-react/src',
          '@remirror/ui-twitter': '../@remirror/ui-twitter/src',
          remirror: '../packages/remirror/src',
        },
        cwd: path.resolve(__dirname),
        loglevel: 'verbose',
      },
    ],
  ],
};

// const defaultConfig = require('../support/babel/base.babel');
// const path = require('path')

// const workingDir = (argpath = '') => path.resolve(__dirname, argpath)

// const ignore = [
//   '**/__tests__',
//   '**/__mocks__',
//   '*.{test,spec}.{ts,tsx}',
//   '**/*.d.ts',
//   '*.d.ts'
// ]

// const nonTestEnv = { ignore }

// module.exports = {
//   // ...defaultConfig,
//   // presets: [['babel-preset-docz'], '@emotion/babel-preset-css-prop'],
//   // presets: [['@babel/preset-env'], '@babel/preset-typescript', '@babel/preset-react'],
//   // presets: ['@babel/preset-typescript'],
//   // plugins: [
//   //   [
//   //     require.resolve('babel-plugin-module-resolver'),
//   //     {
//   //       alias: {
//   //         // '@remirror/core': '../@remirror/core/src',
//   //         '@remirror/core': '../@remirror/core/',
//   //         // '@remirror/core-extensions': '../@remirror/core-extensions/src/',
//   //         '@remirror/extension-emoji': '../@remirror/extension-emoji/src',
//   //         '@remirror/extension-enhanced-link':
//   //           '../@remirror/extension-enhanced-link/src',
//   //         '@remirror/extension-epic-mode':
//   //           '../@remirror/extension-epic-mode/src',
//   //         '@remirror/extension-mention': '../@remirror/extension-mention/src',
//   //         '@remirror/react': '../@remirror/react/src',
//   //         '@remirror/react-ssr': '../@remirror/react-ssr/src',
//   //         '@remirror/renderer-react': '../@remirror/renderer-react/src',
//   //         //remirror: '../packages/remirror/src'
//   //       },
//   //       cwd: path.resolve(__dirname),
//   //       loglevel: 'verbose'
//   //     }
//   //   ]
//   // ],
//   // env: { production: nonTestEnv, development: nonTestEnv },
// }
