/*
Name:   Duotone Forest
Author: by Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)

Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-forest-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

import { css } from 'emotion';

export default css`
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono',
      'Nimbus Mono L', 'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #2a2d2a;
    color: #687d68;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #435643;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #435643;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #535f53;
  }

  .token.punctuation {
    color: #535f53;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.tag,
  .token.operator,
  .token.number {
    color: #a2b34d;
  }

  .token.property,
  .token.function {
    color: #687d68;
  }

  .token.tag-id,
  .token.selector,
  .token.atrule-id {
    color: #f0fff0;
  }

  code.language-javascript,
  .token.attr-name {
    color: #b3d6b3;
  }

  code.language-css,
  code.language-scss,
  .token.boolean,
  .token.string,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .language-scss .token.string,
  .style .token.string,
  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.statement,
  .token.regex,
  .token.atrule {
    color: #e5fb79;
  }

  .token.placeholder,
  .token.variable {
    color: #e5fb79;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #f0fff0;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #b3d6b3;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #5c705c;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers .line-numbers-rows {
    border-right-color: #2c302c;
  }

  .line-numbers-rows > span:before {
    color: #3b423b;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
  .line-highlight {
    background: rgba(162, 179, 77, 0.2);
    background: -webkit-linear-gradient(left, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0));
    background: linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0));
  }
`;
