const common = require('./webpack.common');

module.exports = {
  ...common,
  entry: {
    index: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].[contenthash].js',
    clean: true,
  },
  stats: 'normal',
};
