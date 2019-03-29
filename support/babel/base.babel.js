const ignore = [
  '**/__tests__',
  '**/__mocks__',
  '*.{test,spec}.{ts,tsx}',
  '**/*.d.ts',
  '*.d.ts',
];

const nonTestEnv = { ignore };

module.exports = {
  presets: [['@babel/preset-env'], '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-typescript', // This is needed so that abstract classes are properly compiled
    ['@babel/plugin-transform-runtime', { corejs: 2 }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
    'emotion',
  ],
  // env: { production: nonTestEnv, development: nonTestEnv },
};

// const path = require('path')

// const ignore = [
//   '**/__tests__',
//   '**/__mocks__',
//   '*.{test,spec}.{ts,tsx}',
//   '**/*.d.ts',
//   '*.d.ts',
// ];

// // const nonTestEnv = { ignore };

// module.exports = {

//   // preset
//   // babel-preset-react-app

//   // plugin
//   // babel-plugin-export-metadata
//   // babel-plugin-named-asset-import
//   // react-hot-loader
//   presets: [['@babel/preset-env'], '@babel/preset-typescript', '@babel/preset-react'],
//   plugins: [
//     require.resolve('@babel/plugin-transform-typescript'), // This is needed so that abstract classes are properly compiled
//     [ require.resolve('@babel/plugin-transform-runtime'), { corejs: 2 }],
//     '@babel/plugin-proposal-class-properties',
//     '@babel/plugin-proposal-object-rest-spread',
//     require.resolve('@babel/plugin-syntax-dynamic-import'),
//     // require.resolve('babel-plugin-export-metadata'),     // duplicate
//     // require.resolve('babel-plugin-named-asset-import'),  // duplicate
//     'lodash',
//     'emotion',
//     [
//       require.resolve('babel-plugin-module-resolver'),
//       {
//         alias: {
//           // '@remirror/core': '../../@remirror/core/src',
//           '@remirror/core': '../../@remirror/core/',
//           // '@remirror/core-extensions': '../../@remirror/core-extensions/src/',
//           '@remirror/extension-emoji': '../../@remirror/extension-emoji/src',
//           '@remirror/extension-enhanced-link':
//             '../../@remirror/extension-enhanced-link/src',
//           '@remirror/extension-epic-mode':
//             '../../@remirror/extension-epic-mode/src',
//           '@remirror/extension-mention': '../../@remirror/extension-mention/src',
//           '@remirror/react': '../../@remirror/react/src',
//           '@remirror/react-ssr': '../../@remirror/react-ssr/src',
//           '@remirror/renderer-react': '../../@remirror/renderer-react/src',
//           //remirror: '../../packages/remirror/src'
//         },
//         cwd: path.resolve(__dirname),
//         loglevel: 'verbose'
//       }
//     ]
//   ],

//   // causes weird crash "Error: Cannot find module 'react-docgen/dist/babylon'"
//   // env: { production: nonTestEnv, development: nonTestEnv },
// };
