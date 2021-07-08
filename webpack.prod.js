const common = require('./webpack.common');

module.exports = {
  ...common,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[contenthash].js',
    clean: true,
  },
  stats: 'normal',
};
