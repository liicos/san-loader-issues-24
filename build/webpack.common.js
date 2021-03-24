const path = require('path');
const SanLoaderPlugin = require('san-loader/lib/plugin');

const resolve = dir => {
  return path.resolve(__dirname, dir);
};

module.exports = (env, c) => {
  return {
    output: {
      filename: '[name].bundle.js',
      path: resolve('../dist'),
      chunkFilename: '[name]-[hash:10].chunk.js',
    },
    plugins: [
      new SanLoaderPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.san$/,
          use: ['san-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              limit: 3000,
              outputPath: 'asset/img/',
            },
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              outputPath: 'asset/font/',
            },
          },
        },
        {
          test: /\.art$/,
          loader: 'art-template-loader',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },

    resolve: {
      extensions: ['.js', 'html', '.art', '.json', '.san'],
      alias: {
        '@': resolve('../src'),
      },
    },
  };
};
