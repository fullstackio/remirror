# docz@v1.0.0 configuration for typescript-docgen in monorepo - experimental notes

working: remirror [doczrc.js](https://github.com/ifiokjr/remirror/blob/master/doczrc.js) for docz@"0.13.7"

not working: remirror-docs (0.0.1-alpha.10) with docz@1.0.0-rc.3.

### challanges

- tricky / not totally clear how to get docz to set up typescript + babel + webpack + paths for the monorepo...
- so that it can resolve not just `./doc/**/*.mdx` files for the doc website, but ALSO so it will auto-generate API documentation pages / proptables for the rest of the packages in the monorepo based on the existing readmes & inline jsdoc comments.

here's one problem - the previous config for docz@0.13.7 hooked into docz's webpack settings for this plugin and modified them to work with the monorepo paths... looks like it the package is not used by docz@1.0.0 :

```bash
$ yarn why react-docgen-typescript-loader
yarn why v1.13.0
[1/4] 🤔  Why do we have the module "react-docgen-typescript-loader"...?
[2/4] 🚚  Initialising dependency graph...
warning Resolution field "jsdom@14.0.0" is incompatible with requested version "jsdom@^11.5.1"
[3/4] 🔍  Finding dependency...
error We couldn't find a match!
✨  Done in 1.26s.

$ yarn why react-docgen-typescript
yarn why v1.13.0
[1/4] 🤔  Why do we have the module "react-docgen-typescript"...?
[2/4] 🚚  Initialising dependency graph...
warning Resolution field "jsdom@14.0.0" is incompatible with requested version "jsdom@^11.5.1"
[3/4] 🔍  Finding dependency...
[4/4] 🚡  Calculating file sizes...
=> Found "react-docgen-typescript@1.12.3"
info Reasons this module exists
   - "_project_#docs#docz-core" depends on it
   - Hoisted from "_project_#docs#docz-core#react-docgen-typescript"
info Disk size without dependencies: "276KB"
info Disk size with unique dependencies: "276KB"
info Disk size with transitive dependencies: "276KB"
info Number of shared dependencies: 0
✨  Done in 1.08s.
```

ok, but react-docgen-typescript IS included. Hmmmm.

docz@v1.0.0 has a typescript demo in their example repo:

- https://github.com/pedronauck/docz/tree/master/examples/typescript
- if you run it, the `<Props of={Button} />` component renders props that have been introspected / paresed from jsdoc somehow.
- Here's a relevent issue: [[docz]: Bugs and bugs around react-docgen](https://github.com/pedronauck/docz/issues/240).

\

### not working yet

I don't undestand webpack well at all, so my experimentation was more brute-force permuation of configuration space than rational design. My approach was to

- upgrade docz to `∂ocz@1.0.0-rc.3`

- adjust the following `doczrc.js` & `.bablerc` configuration files until `yarn run dev:docs` or `./docs/node_modules/.bin/docz dev` would at least execute without fatal errors

  - `doczrc.js`
  - `babel.config.js`
  - `support/babel/base.babel.js`
  - `docs/.babelrc.js`

- use `onCreateWebpackChain(config)` & `modifyBabelRc(config)` w/ `console.log(config)` to inspect the state of docz's internal & overriden babel / webpack config.

- check `.docz/app/imports.js` and `docz --debug` output to learn if the configuration was properly compiling & packing the ts modules docz encountered when processing docz/\*.mdx files and also all the other .md files in the repo.

- haven't gotten it working yet but onCreateWebpackChain() hook docz provides seems to have potential:
  - see commented out code in doczrc.js
  - see https://github.com/neutrinojs/webpack-chain#config-module-rules-uses-loaders-modifying-options
  - see logged output of

### logs

```bash
$ yarn run dev:docs

➤ ｢wds｣: SockJS v0.3.19 bound to "/sockjs-node"
Webpack Bundle Analyzer saved report to /Users/100ideas/dev/da-play/1_overmind/remirror/.docz/dist/report.html
Webpack Bundle Analyzer saved stats file to /Users/100ideas/dev/da-play/1_overmind/remirror/.docz/dist/stats.json
✖ ｢wdm｣: Hash: 55666a8089ecee6a5625
Version: webpack 4.29.6
Time: 11786ms
Built at: 03/28/2019 5:08:31 PM
                                               Asset       Size                                   Chunks                    Chunk Names
                                         assets.json   1.75 KiB                                           [emitted]
                                          index.html  837 bytes                                           [emitted]
                                    static/js/app.js   47.6 KiB                                      app  [emitted]         app
                static/js/docs-editors-ui-twitter.js   10.3 KiB                  docs-editors-ui-twitter  [emitted]         docs-editors-ui-twitter
     static/js/docs-editors-ui-twitter~docs-index.js   1.78 MiB       docs-editors-ui-twitter~docs-index  [emitted]  [big]  docs-editors-ui-twitter~docs-index
           static/js/docs-examples-document-model.js   34.7 KiB             docs-examples-document-model  [emitted]         docs-examples-document-model
      static/js/docs-examples-extension-epic-mode.js   30.8 KiB        docs-examples-extension-epic-mode  [emitted]         docs-examples-extension-epic-mode
                             static/js/docs-index.js    101 KiB                               docs-index  [emitted]         docs-index
                           static/js/docs-install.js   17.8 KiB                             docs-install  [emitted]         docs-install
                       static/js/docs-walkthrough.js   9.56 KiB                         docs-walkthrough  [emitted]         docs-walkthrough
       static/js/packages-jest-prosemirror-readme.js   24.9 KiB         packages-jest-prosemirror-readme  [emitted]         packages-jest-prosemirror-readme
          static/js/packages-jest-remirror-readme.js   55.9 KiB            packages-jest-remirror-readme  [emitted]         packages-jest-remirror-readme
               static/js/packages-remirror-readme.js   29.2 KiB                 packages-remirror-readme  [emitted]         packages-remirror-readme
        static/js/remirror-core-extensions-readme.js   24.3 KiB          remirror-core-extensions-readme  [emitted]         remirror-core-extensions-readme
                   static/js/remirror-core-readme.js   49.2 KiB                     remirror-core-readme  [emitted]         remirror-core-readme
        static/js/remirror-extension-emoji-readme.js   24.2 KiB          remirror-extension-emoji-readme  [emitted]         remirror-extension-emoji-readme
static/js/remirror-extension-enhanced-link-readme.js   29.7 KiB  remirror-extension-enhanced-link-readme  [emitted]         remirror-extension-enhanced-link-readme
    static/js/remirror-extension-epic-mode-readme.js   27.6 KiB      remirror-extension-epic-mode-readme  [emitted]         remirror-extension-epic-mode-readme
      static/js/remirror-extension-mention-readme.js   24.3 KiB        remirror-extension-mention-readme  [emitted]         remirror-extension-mention-readme
                  static/js/remirror-react-readme.js   25.5 KiB                    remirror-react-readme  [emitted]         remirror-react-readme
              static/js/remirror-react-ssr-readme.js   24.1 KiB                remirror-react-ssr-readme  [emitted]         remirror-react-ssr-readme
         static/js/remirror-renderer-react-readme.js   24.2 KiB           remirror-renderer-react-readme  [emitted]         remirror-renderer-react-readme
             static/js/remirror-ui-twitter-readme.js     24 KiB               remirror-ui-twitter-readme  [emitted]         remirror-ui-twitter-readme
            static/js/support-dependencies-readme.js   10.8 KiB              support-dependencies-readme  [emitted]         support-dependencies-readme
                                static/js/vendors.js   9.43 MiB                                  vendors  [emitted]  [big]  vendors
Entrypoint app [big] = static/js/vendors.js static/js/app.js (prefetch: static/js/vendors.js static/js/docs-editors-ui-twitter~docs-index.js static/js/docs-editors-ui-twitter.js static/js/docs-index.js static/js/docs-examples-document-model.js static/js/docs-examples-extension-epic-mode.js static/js/docs-install.js static/js/docs-walkthrough.js static/js/packages-jest-prosemirror-readme.js static/js/packages-jest-remirror-readme.js static/js/packages-remirror-readme.js static/js/remirror-core-extensions-readme.js static/js/remirror-core-readme.js static/js/remirror-extension-emoji-readme.js static/js/remirror-extension-enhanced-link-readme.js static/js/remirror-extension-epic-mode-readme.js static/js/remirror-extension-mention-readme.js static/js/remirror-react-readme.js static/js/remirror-react-ssr-readme.js static/js/remirror-renderer-react-readme.js static/js/remirror-ui-twitter-readme.js static/js/support-dependencies-readme.js)
[0] multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx 40 bytes {app} [built]
[./.docz/app/index.jsx] 2.12 KiB {app} [built]
[./.docz/app/root.jsx] 1.56 KiB {app} [built]
[./node_modules/react-dev-utils/formatWebpackMessages.js] 4.27 KiB {vendors} [built]
[./node_modules/react-dev-utils/launchEditorEndpoint.js] 330 bytes {vendors} [built]
[./node_modules/react-dev-utils/node_modules/strip-ansi/index.js] 150 bytes {vendors} [built]
[./node_modules/react-dev-utils/webpackHotDevClient.js] 7.72 KiB {vendors} [built]
[./node_modules/react-dom/index.js] 1.33 KiB {vendors} [built]
[./node_modules/react-error-overlay/lib/index.js] 326 KiB {vendors} [built]
[./node_modules/react-hot-loader/index.js] 859 bytes {vendors} [built]
[./node_modules/react/index.js] 190 bytes {vendors} [built]
[./node_modules/sockjs-client/lib/entry.js] 244 bytes {vendors} [built]
[./node_modules/url/url.js] 22.8 KiB {vendors} [built]
[./node_modules/webpack/buildin/harmony-module.js] (webpack)/buildin/harmony-module.js 573 bytes {vendors} [built]
[./node_modules/webpack/buildin/module.js] (webpack)/buildin/module.js 497 bytes {vendors} [built]
    + 373 hidden modules
ERROR in ./docs/editors/ui-twitter.tsx
Module not found: Error: Can't resolve '@remirror/core' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/editors'
 @ ./docs/editors/ui-twitter.tsx 14:0-49 21:17-26 36:86-90 43:87-91
 @ ./docs/index.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/extension-epic-mode.tsx
Module not found: Error: Can't resolve '@remirror/core' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/extension-epic-mode.tsx 12:0-51 17:50-67
 @ ./docs/index.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/document-model.tsx
Module not found: Error: Can't resolve '@remirror/core' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/document-model.tsx 14:0-41 35:18-25
 @ ./docs/examples/document-model.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/extension-epic-mode.tsx
Module not found: Error: Can't resolve '@remirror/core-extensions' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/extension-epic-mode.tsx 13:0-68 25:24-28 25:36-42 25:50-59 95:24-28 95:36-42 95:50-59 164:24-28 164:36-42 164:50-59
 @ ./docs/index.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/document-model.tsx
Module not found: Error: Can't resolve '@remirror/core-extensions' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/document-model.tsx 15:0-68 20:24-28 20:36-42 20:50-59
 @ ./docs/examples/document-model.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/extension-epic-mode.tsx
Module not found: Error: Can't resolve '@remirror/extension-epic-mode' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/extension-epic-mode.tsx 14:0-101 25:67-75 26:20-33 95:67-75 96:20-34 164:67-75 165:20-31
 @ ./docs/index.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/extension-epic-mode.tsx
Module not found: Error: Can't resolve '@remirror/react' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/extension-epic-mode.tsx 15:0-43 37:25-33 107:25-33 177:25-33
 @ ./docs/index.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/document-model.tsx
Module not found: Error: Can't resolve '@remirror/react' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/document-model.tsx 16:0-61 65:25-33 84:7-23
 @ ./docs/examples/document-model.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/examples/document-model.tsx
Module not found: Error: Can't resolve '@remirror/renderer-react' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/examples'
 @ ./docs/examples/document-model.tsx 17:0-54 212:29-39
 @ ./docs/examples/document-model.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

ERROR in ./docs/editors/ui-twitter.tsx
Module not found: Error: Can't resolve '@remirror/ui-twitter' in '/Users/100ideas/dev/da-play/1_overmind/remirror/docs/editors'
 @ ./docs/editors/ui-twitter.tsx 12:0-49 49:29-38
 @ ./docs/index.mdx
 @ ./.docz/app/imports.js
 @ ./.docz/app/root.jsx
 @ ./.docz/app/index.jsx
 @ multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./.docz/app/index.jsx

```

`./.docz/app/imports.js`:

```js
export const imports = {
  'docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'),
  'docs/install.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-install" */ 'docs/install.mdx'),
  'docs/walkthrough.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-walkthrough" */ 'docs/walkthrough.mdx'),
  '@remirror/core/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-core-readme" */ '@remirror/core/readme.md'),
  '@remirror/core-extensions/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-core-extensions-readme" */ '@remirror/core-extensions/readme.md'),
  '@remirror/extension-emoji/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-extension-emoji-readme" */ '@remirror/extension-emoji/readme.md'),
  '@remirror/extension-enhanced-link/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-extension-enhanced-link-readme" */ '@remirror/extension-enhanced-link/readme.md'),
  '@remirror/extension-epic-mode/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-extension-epic-mode-readme" */ '@remirror/extension-epic-mode/readme.md'),
  '@remirror/extension-mention/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-extension-mention-readme" */ '@remirror/extension-mention/readme.md'),
  '@remirror/react/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-react-readme" */ '@remirror/react/readme.md'),
  '@remirror/react-ssr/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-react-ssr-readme" */ '@remirror/react-ssr/readme.md'),
  '@remirror/renderer-react/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-renderer-react-readme" */ '@remirror/renderer-react/readme.md'),
  '@remirror/ui-twitter/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "remirror-ui-twitter-readme" */ '@remirror/ui-twitter/readme.md'),
  'packages/jest-prosemirror/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-jest-prosemirror-readme" */ 'packages/jest-prosemirror/readme.md'),
  'packages/jest-remirror/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-jest-remirror-readme" */ 'packages/jest-remirror/readme.md'),
  'packages/remirror/readme.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "packages-remirror-readme" */ 'packages/remirror/readme.md'),
  'support/dependencies/README.md': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "support-dependencies-readme" */ 'support/dependencies/README.md'),
  'docs/editors/ui-twitter.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-editors-ui-twitter" */ 'docs/editors/ui-twitter.mdx'),
  'docs/examples/document-model.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-examples-document-model" */ 'docs/examples/document-model.mdx'),
  'docs/examples/extension-epic-mode.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-examples-extension-epic-mode" */ 'docs/examples/extension-epic-mode.mdx'),
};
```

---

### output from `doczrc.js`: `onCreateWebpackChain: config => { console.log(config.toString()); return config }`

```js
// this output is from a test in which I disabled all user-provided babel/webpack configuration to better understand what docz sets up by default.

const doczBundlerConfig_noConfigureBabel = {
  context: '/Users/100ideas/dev/da-play/1_overmind/remirror',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  node: {
    child_process: 'empty',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  output: {
    pathinfo: true,
    path: '/Users/100ideas/dev/da-play/1_overmind/remirror/.docz/dist',
    publicPath: '/',
    filename: 'static/js/[name].js',
    sourceMapFilename: 'static/js/[name].js.map',
    crossOriginLoading: 'anonymous',
    devtoolModuleFilenameTemplate: info => path.resolve(info.resourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    symlinks: true,
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.tsx', '.ts', '.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx', '.mdx'],
    modules: [
      'node_modules',
      '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/docz-core/node_modules',
      '/Users/100ideas/dev/da-play/1_overmind/remirror',
    ],
  },
  resolveLoader: {
    symlinks: true,
    modules: [
      'node_modules',
      '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/docz-core/node_modules',
      '/Users/100ideas/dev/da-play/1_overmind/remirror',
    ],
  },
  module: {
    rules: [
      /* config.module.rule('sourcemaps') */
      {
        test: /\.(js|mjs|jsx|ts|tsx|md|mdx)$/,
        enforce: 'pre',
        include: [
          '/Users/100ideas/dev/da-play/1_overmind/remirror',
          '/Users/100ideas/dev/da-play/1_overmind/remirror/.docz/app',
        ],
        exclude: [filepath => /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath)],
        use: [
          /* config.module.rule('sourcemaps').use('sourcemaps') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/source-map-loader/index.js',
          },
        ],
      },
      /* config.module.rule('js') */
      {
        test: /\.(jsx?|mjs)$/,
        include: [
          '/Users/100ideas/dev/da-play/1_overmind/remirror',
          '/Users/100ideas/dev/da-play/1_overmind/remirror/.docz/app',
        ],
        exclude: [filepath => /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath)],
        use: [
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/thread-loader/dist/cjs.js',
            options: {
              workers: 3,
            },
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-preset-react-app/index.js',
                  {
                    typescript: undefined,
                    flow: false,
                  },
                ],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-plugin-export-metadata/src/index.js',
                [
                  '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    corejs: 2,
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/react-hot-loader/babel.js',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
                'lodash',
                'emotion',
              ],
              babelrcRoots: ['.', 'docs/.babelrc.js', '@remirror/*'],
              babelrc: false,
              cacheCompression: false,
              cacheDirectory: false,
              cacheIdentifier: null,
              compact: false,
              customize:
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-preset-react-app/webpack-overrides.js',
            },
          },
        ],
      },
      /* config.module.rule('mdx') */
      {
        test: /\.(md|markdown|mdx)$/,
        include: [
          '/Users/100ideas/dev/da-play/1_overmind/remirror',
          '/Users/100ideas/dev/da-play/1_overmind/remirror/.docz/app',
        ],
        exclude: [filepath => /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath)],
        use: [
          /* config.module.rule('mdx').use('babel-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-preset-react-app/index.js',
                  {
                    typescript: undefined,
                    flow: false,
                  },
                ],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-plugin-export-metadata/src/index.js',
                [
                  '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    corejs: 2,
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/react-hot-loader/babel.js',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
                'lodash',
                'emotion',
              ],
              babelrcRoots: ['.', 'docs/.babelrc.js', '@remirror/*'],
              babelrc: false,
              cacheCompression: false,
              cacheDirectory: false,
              cacheIdentifier: null,
              compact: false,
              customize:
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-preset-react-app/webpack-overrides.js',
            },
          },
          /* config.module.rule('mdx').use('mdx-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/@mdx-js/loader/index.js',
            options: {
              mdPlugins: [
                [
                  function() {
                    /* omitted long function */
                  },
                  {
                    type: 'yaml',
                    marker: '-',
                  },
                ],
                function() {
                  /* omitted long function */
                },
              ],
              hastPlugins: [
                [
                  function() {
                    /* omitted long function */
                  },
                  {
                    root: '/Users/100ideas/dev/da-play/1_overmind/remirror',
                    useCodeSandbox: true,
                  },
                ],
                function slug() {
                  return transformer;
                },
              ],
            },
          },
        ],
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/fonts/[name].[hash:8].[ext]',
            },
          },
        ],
      },
      /* config.module.rule('ts') */
      {
        test: /\.tsx?$/,
        include: [
          '/Users/100ideas/dev/da-play/1_overmind/remirror',
          '/Users/100ideas/dev/da-play/1_overmind/remirror/.docz/app',
        ],
        exclude: [filepath => /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath)],
        use: [
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/thread-loader/dist/cjs.js',
            options: {
              workers: 3,
            },
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-preset-react-app/index.js',
                  {
                    typescript: true,
                    flow: false,
                  },
                ],
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-plugin-export-metadata/src/index.js',
                [
                  '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-plugin-named-asset-import/index.js',
                  {
                    corejs: 2,
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/react-hot-loader/babel.js',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import',
                'lodash',
                'emotion',
              ],
              babelrcRoots: ['.', 'docs/.babelrc.js', '@remirror/*'],
              babelrc: false,
              cacheCompression: false,
              cacheDirectory: false,
              cacheIdentifier: null,
              compact: false,
              customize:
                '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-preset-react-app/webpack-overrides.js',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    nodeEnv: 'development',
    namedModules: true,
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    /* config.plugin('html-plugin') */
    new MiniHtmlWebpackPlugin({
      context: {
        favicon: 'https://raw.githubusercontent.com/ifiokjr/remirror/master/support/assets/favicon.ico',
        trimWhitespace: true,
      },
      template: ctx => {
        const doc = parseHtml({ ctx, dev, template, config: args });
        return dev
          ? doc
          : htmlMinifier.minify(doc, {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            });
      },
    }),
    /* config.plugin('assets-plugin') */
    new ManifestPlugin({
      publicPath: '/',
      fileName: 'assets.json',
    }),
    /* config.plugin('ignore-plugin') */
    new IgnorePlugin(/(regenerate\-unicode\-properties)|(elliptic)/, /node_modules/),
    /* config.plugin('injections') */
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        PUBLIC_URL: '"/"',
      },
      NODE_ENV: '"development"',
      DOCZ_BASE_URL: '"/"',
    }),
    /* config.plugin('bundle-analyzer') */
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      openAnalyzer: false,
      analyzerMode: 'static',
    }),
    /* config.plugin('watch-missing-node-modules') */
    new WatchMissingNodeModulesPlugin('/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules'),
  ],
  performance: {
    hints: false,
  },
  entry: {
    app: [
      '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/react-dev-utils/webpackHotDevClient.js',
      '/Users/100ideas/dev/da-play/1_overmind/remirror/.docz/app/index.jsx',
    ],
  },
};
```
