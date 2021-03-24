const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, { c }) => {
  return merge(common(env, c), {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: { polyfill: 'babel-polyfill', index: './src/app/index/index.js' },
    plugins: [
      new HtmlWebpackPlugin({
        chunks: ['polyfill', 'index'],
        filename: 'index.html',
        template: './src/app/index/index.ejs',
      }),
    ],
    devServer: {
      overlay: {
        warnings: true,
        errors: true,
      },
      proxy: {},
    },
  });
};
