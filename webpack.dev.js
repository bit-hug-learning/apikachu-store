const common = require('./webpack.common');

module.exports = {
  ...common,
  entry: {
    devtools: './devtools/index.js',
    index: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  stats: 'errors-only',
};
