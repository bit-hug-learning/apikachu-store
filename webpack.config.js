const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    devtools: (process.env.NODE_ENV = 'development'
      ? './devtools/index.js'
      : undefined),
    index: './src/index.js',
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: {
      index: 'build/index.html',
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        type: 'asset',
        test: /\.(svg|png|jpeg|jpg|gif)$/i,
      },
    ],
  },
  stats: 'errors-only',
};
