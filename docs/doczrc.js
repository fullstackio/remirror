const externalLinks = require('remark-external-links');
const path = require('path');

const PUBLIC = path.resolve(__dirname, 'public');
const THEME = path.resolve(__dirname, 'theme');

module.exports = {
  title: 'Remirror',
  description: 'A world class text editor for every JavaScript environment',
  propsParser: false,
  indexHtml: 'index.html',
  mdPlugins: [externalLinks],
  htmlContext: {
    favicon:
      'https://raw.githubusercontent.com/ifiokjr/remirror/master/support/assets/favicon.ico',
  },
  theme: 'theme/index',
  typescript: true,
  ignore: ['theme/**'],
  // public: workingDir('../support/assets'),

  onCreateWebpackChain(config) {
    config.resolve.alias
      .set('@fonts', `${PUBLIC}/fonts`)
      .set('@images', `${PUBLIC}/images`)
      .set('@components', `${THEME}/components`)
      .set('@styles', `${THEME}/styles`)
      .set('@styled', `${THEME}/styled`);

    return config;
  },
};
