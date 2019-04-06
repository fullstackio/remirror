import externalLinks from 'remark-external-links';
import { resolve } from 'path';

const PUBLIC = resolve(__dirname, 'public');
const THEME = resolve(__dirname, 'theme');

export default {
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
