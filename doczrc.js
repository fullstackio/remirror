const { resolve } = require('path');
const localConfig = require('./docs/.babelrc');

const webPackChainDump = require('./support/docz-v1-WIP-notes/docz_bundler_config');

const workingDir = (path = '') => resolve(__dirname, path);

const babelConfig = {
  ...localConfig,
  plugins: [
    ...localConfig.plugins,
    ...(process.env.COVERAGE
      ? [
          [
            'istanbul',
            {
              exclude: [
                '**/node_modules/**',
                'node_modules/**',
                'node_modules',
                '**/*.d.ts',
                '**/__mocks__',
                '**/__tests__/',
                '**/__fixtures__',
                'jest\\.*\\.ts',
                'live-test-helpers.ts',
                'unit-test-helpers.ts',
              ],
            },
          ],
        ]
      : []),
  ],
};

module.exports = {
  public: workingDir('support/assets'),
  indexHtml: 'docs/index.html',
  htmlContext: {
    favicon:
      'https://raw.githubusercontent.com/ifiokjr/remirror/master/support/assets/favicon.ico',
  },
  title: 'Remirror',
  typescript: true,
  debug: true,

  // modifyBabelRc() {
  //   return babelConfig;
  // },

  // https://github.com/neutrinojs/webpack-chain#config-module-rules-uses-loaders-modifying-options
  onCreateWebpackChain: config => {
    // config.module.rule('mdx').use('babel-loader').options({
    //   /* presets */, plugins: ([])
    // })

    // config.module.rule('mdx').use('babel-loader').tap(options =>
    //   merge(options, {
    //   plugins: ['@babel/plugin-proposal-class-properties']
    // }));

    console.log('#########\ndocz bundler config:');
    // console.log(config.toString());
    console.log('#########\n');
    // config.resolve.alias.merge(aliasPaths)
    return config;
  },

  // modifyBundlerConfig: config => {
  //   console.log("#########\ndocz bundler config:")
  //   const loaders = config.plugins[0].config.loaders.map(loader => {
  //     if (loader.loader.includes('react-docgen-typescript-loader')) {
  //       return {
  //         ...loader,
  //         options: {
  //           propFilter: prop => !prop.parent.fileName.includes('node_modules'),
  //           tsconfigPath: workingDir('./support/tsconfig.base.json'),
  //         },
  //       };
  //     }
  //     return loader;
  //   });

  //   config.plugins[0].config.loaders = loaders;

  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     loader: 'babel-loader',
  //     options: babelConfig,
  //     include: [workingDir('./@remirror'), /@remirror/],
  //   });

  //   return config;
  // },
};

// const { resolve } = require('path');
// const localConfig = require('./docs/.babelrc');

// const workingDir = (path = '') => resolve(__dirname, path);
// console.log('docz original workingDir:', workingDir())

// // const babelConfig = {
// //   ...localConfig,
// //   plugins: [
// //     ...localConfig.plugins,
// //     ...(process.env.COVERAGE
// //       ? [
// //           [
// //             'istanbul',
// //             {
// //               exclude: [
// //                 '**/node_modules/**',
// //                 'node_modules/**',
// //                 'node_modules',
// //                 '**/*.d.ts',
// //                 '**/__mocks__',
// //                 '**/__tests__/',
// //                 '**/__fixtures__',
// //                 'jest\\.*\\.ts',
// //                 'live-test-helpers.ts',
// //                 'unit-test-helpers.ts',
// //               ],
// //             },
// //           ],
// //         ]
// //       : []),
// //   ],
// // };

// // from docs/.babelrc.js
// const aliasPaths =  {
//   '@remirror/core': workingDir('@remirror/core/src'),
//   '@remirror/core-extensions': workingDir('@remirror/core-extensions/src'),
//   '@remirror/extension-emoji': workingDir('@remirror/extension-emoji/src'),
//   '@remirror/extension-enhanced-link': workingDir('@remirror/extension-enhanced-link/src'),
//   '@remirror/extension-epic-mode': workingDir('@remirror/extension-epic-mode/src'),
//   '@remirror/extension-mention': workingDir('@remirror/extension-mention/src'),
//   '@remirror/react': workingDir('@remirror/react/src'),
//   '@remirror/react-ssr': workingDir('@remirror/react-ssr/src'),
//   '@remirror/renderer-react': workingDir('@remirror/renderer-react/src'),
//   '@remirror/ui-twitter': workingDir('@remirror/ui-twitter/src'),
//   remirror: workingDir('packages/remirror/src'),
// }

// module.exports = {
//   debug: true,
//   public: workingDir('support/assets'),
//   indexHtml: workingDir('docs/index.html'),
//   htmlContext: {
//     favicon:
//       'https://raw.githubusercontent.com/ifiokjr/remirror/master/support/assets/favicon.ico',
//   },
//   title: 'Remirror',
//   typescript: true,
//   codeSandbox: false
// };

//   // https://github.com/neutrinojs/webpack-chain#chainedmap
//   // onCreateWebpackChain: (config) => config.resolve.alias.merge( aliasPaths )

//   // modifyBabelRc: config => {
//   //   console.log(`/n/n`)
//   //   console.log("docz babelrc config:", config)

//   //   config.plugins = [...config.plugins, ...localConfig.plugins]

//   //   console.log(`/n/n`)
//   //   console.log("merged babelrc config:", config)
//   //   console.log(`/n/n`)
//   //   console.log("merged babelrc config aliases:", config.plugins[7][1])
//   //   return config
//   // }
