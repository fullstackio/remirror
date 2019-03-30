import Styled, { css as StyledCss, ThemedCssFunction, ThemedStyledInterface } from 'styled-components';
import { styles } from './styles';
import * as colors from './styles/colors';
import { breakpoints, mq } from './styles/responsive';

export const styled = Styled as ThemedStyledInterface<DocsTheme>;
export const css = StyledCss as ThemedCssFunction<DocsTheme>;

export type DocsTheme = typeof docsTheme;

export const docsTheme = {
  colors,
  styles,
  mq,
  breakpoints,
};
