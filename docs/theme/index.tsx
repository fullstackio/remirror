import React, { FC } from 'react';

import { ComponentsProvider, theme, useConfig } from 'docz';
import { ThemeProvider } from 'styled-components';
import webfont from 'webfontloader';

import { Main } from './components/shared';
import { components } from './components/ui';
import { docsTheme } from './styled';
import { Global } from './styles/global';

webfont.load({
  google: {
    families: ['Inconsolata', 'Zilla Slab:300,400,600'],
  },
});

const Theme: FC = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Main>
          <Global />
          {children}
        </Main>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

export default theme(docsTheme)(Theme);
