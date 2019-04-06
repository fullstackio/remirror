import Styled, {
  createGlobalStyle as CreateGlobalStyle,
  css as StyledCss,
  ThemedCssFunction,
  ThemedStyledComponentsModule,
  ThemedStyledInterface,
} from 'styled-components';
import { styles } from './styles';
import { colors } from './styles/colors';
import { fonts } from './styles/fonts';
import { breakpoints, mq } from './styles/responsive';

export const styled = Styled as ThemedStyledInterface<DocsTheme>;
export const css = StyledCss as ThemedCssFunction<DocsTheme>;
export const createGlobalStyle = CreateGlobalStyle as ThemedStyledComponentsModule<
  DocsTheme
>['createGlobalStyle'];

export type DocsTheme = typeof docsTheme;

export const docsTheme = {
  colors,
  radii: '3px',
  fonts,
  styles,
  mq,
  breakpoints,
};
