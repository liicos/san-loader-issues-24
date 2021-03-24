const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    chunks: ['polyfill', 'index'],
    filename: 'index.html',
    template: './src/app/index/index.ejs',
  }),
];

module.exports = (env, { c }) => {
  return merge(common(env, c), {
    entry: { polyfill: 'babel-polyfill', index: './src/app/index/index.js' },
    mode: 'production',
    plugins,
    devtool: '',
  });
};
