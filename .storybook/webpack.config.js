// const path = require('path');
// module.exports = function ({ config }) {
//   config.module.rules.push({
//     loaders: [
//       {
//         test: /\.stories\.js?$/,
//         loaders: [require.resolve('@storybook/addon-storysource/loader')],
//         include: [path.resolve(__dirname, '../src')],
//         enforce: 'pre',
//       },
//     ]
//   });

//   return config;
// };

module.exports = function ({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};