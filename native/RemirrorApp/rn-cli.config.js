const path = require('path');

// Taken from https://github.com/connectdotz/yarn-nohoist-examples/blob/master/workspaces-examples/universal-cipher/packages/RNCipher/rn-cli.config.js
const dir = (...args) => path.resolve(__dirname, path.join(...args));

module.exports = {
  watchFolders: [dir(), dir('../..')],
};
