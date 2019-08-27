const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'lib');

const excludes = [
  'index.js'
];
const entries = fs.readdirSync(SRC_PATH).filter(dir => excludes.indexOf(dir) === -1);

const entry = {};
entries.forEach(key => {
  entry[key] = path.resolve(SRC_PATH, `${key}/index.js`);
});

module.exports = merge(common, {
  entry,
  output: {
    path: BUILD_PATH,
    filename: '[name]/index.js',
    library: 'vueKitTest',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '[name]/*.js',
        '[name]/*.css',
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
      chunkFilename: '[name]/index.css',
    }),
  ],
});