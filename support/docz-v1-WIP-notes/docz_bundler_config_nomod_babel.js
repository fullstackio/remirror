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
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.resourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    symlinks: true,
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      '.tsx',
      '.ts',
      '.web.js',
      '.mjs',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
      '.mdx',
    ],
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
        exclude: [
          filepath =>
            /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath),
        ],
        use: [
          /* config.module.rule('sourcemaps').use('sourcemaps') */
          {
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/source-map-loader/index.js',
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
        exclude: [
          filepath =>
            /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath),
        ],
        use: [
          /* config.module.rule('js').use('thread-loader') */
          {
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/thread-loader/dist/cjs.js',
            options: {
              workers: 3,
            },
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-loader/lib/index.js',
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
        exclude: [
          filepath =>
            /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath),
        ],
        use: [
          /* config.module.rule('mdx').use('babel-loader') */
          {
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-loader/lib/index.js',
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
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/@mdx-js/loader/index.js',
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
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/url-loader/dist/cjs.js',
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
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/file-loader/dist/cjs.js',
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
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/url-loader/dist/cjs.js',
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
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/url-loader/dist/cjs.js',
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
        exclude: [
          filepath =>
            /node_modules/.test(filepath) || /@babel(?:\/|\\{1,2})runtime/.test(filepath),
        ],
        use: [
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/thread-loader/dist/cjs.js',
            options: {
              workers: 3,
            },
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader:
              '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules/babel-loader/lib/index.js',
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
        favicon:
          'https://raw.githubusercontent.com/ifiokjr/remirror/master/support/assets/favicon.ico',
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
    new WatchMissingNodeModulesPlugin(
      '/Users/100ideas/dev/da-play/1_overmind/remirror/node_modules',
    ),
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
