const common = require('./webpack.common');

module.exports = {
  ...common,
  entry: {
    devtools: './devtools/index.js',
    index: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    historyApiFallback: {
      index: 'build/index.html',
    },
  },
  stats: 'errors-only',
};
