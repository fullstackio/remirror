import { default as atomDark } from 'react-syntax-highlighter/dist/styles/prism/atom-dark';
import { default as base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/styles/prism/base16-ateliersulphurpool.light';
import { default as cb } from 'react-syntax-highlighter/dist/styles/prism/cb';
import { default as coy } from 'react-syntax-highlighter/dist/styles/prism/coy';
import { default as darcula } from 'react-syntax-highlighter/dist/styles/prism/darcula';
import { default as dark } from 'react-syntax-highlighter/dist/styles/prism/dark';
import { default as duotoneDark } from 'react-syntax-highlighter/dist/styles/prism/duotone-dark';
import { default as duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism/duotone-earth';
import { default as duotoneForest } from 'react-syntax-highlighter/dist/styles/prism/duotone-forest';
import { default as duotoneLight } from 'react-syntax-highlighter/dist/styles/prism/duotone-light';
import { default as duotoneSea } from 'react-syntax-highlighter/dist/styles/prism/duotone-sea';
import { default as duotoneSpace } from 'react-syntax-highlighter/dist/styles/prism/duotone-space';
import { default as funky } from 'react-syntax-highlighter/dist/styles/prism/funky';
import { default as ghcolors } from 'react-syntax-highlighter/dist/styles/prism/ghcolors';
import { default as hopscotch } from 'react-syntax-highlighter/dist/styles/prism/hopscotch';
import { default as okaidia } from 'react-syntax-highlighter/dist/styles/prism/okaidia';
import { default as pojoaque } from 'react-syntax-highlighter/dist/styles/prism/pojoaque';
import { default as prism } from 'react-syntax-highlighter/dist/styles/prism/prism';
import { default as solarizedlight } from 'react-syntax-highlighter/dist/styles/prism/solarizedlight';
import { default as tomorrow } from 'react-syntax-highlighter/dist/styles/prism/tomorrow';
import { default as twilight } from 'react-syntax-highlighter/dist/styles/prism/twilight';
import { default as vs } from 'react-syntax-highlighter/dist/styles/prism/vs';
import { default as xonokai } from 'react-syntax-highlighter/dist/styles/prism/xonokai';

export const syntaxTheme = {
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coy,
  darcula,
  dark,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  funky,
  ghcolors,
  hopscotch,
  okaidia,
  pojoaque,
  prism,
  solarizedlight,
  tomorrow,
  twilight,
  vs,
  xonokai,
};

export type SyntaxTheme = keyof typeof syntaxTheme;
