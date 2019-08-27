const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'lib');

module.exports = merge(common, {
  entry: {
    index: path.resolve(SRC_PATH, 'index.js'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'vue-kit-test.min.js',
    library: 'vueKitTest',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '*.mini.js',
        '*.css',
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
});