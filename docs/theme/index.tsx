import React, { FC } from 'react';

import { ComponentsProvider, theme, useConfig } from 'docz';
import { ThemeProvider } from 'styled-components';
import webfont from 'webfontloader';

import { Main } from './components/shared';
import * as components from './components/ui';
import { docsTheme } from './styled';
import { Global } from './styles/global';

webfont.load({
  google: {
    families: ['Inconsolata', 'Zilla Slab:300,400,600'],
  },
});

const map = {
  page: components.Page,
  loading: components.Loading,
  h1: components.H1,
  h2: components.H2,
  h3: components.H3,
  h4: components.H4,
  h5: components.H5,
  h6: components.H6,
  hr: components.Hr,
  img: components.Image,
  ul: components.List,
  pre: components.Pre,
  inlineCode: components.Code,
  blockquote: components.Blockquote,
};

const Theme: React.FC = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={map}>
        <Main>
          <Global />
          {children}
        </Main>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(docsTheme)(Theme);
