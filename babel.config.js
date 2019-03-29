// module.exports = {
//   ...require('./support/babel/base.babel'),
//   babelrcRoots: ['.', '@remirror/*', 'docs/.babelrc.js'],
// };

// const basebabelrc = require('./support/babel/base.babel'),

module.exports = {
  ...require('./support/babel/base.babel.js'),
  babelrcRoots: ['.', 'docs/.babelrc.js', '@remirror/*'],
};
