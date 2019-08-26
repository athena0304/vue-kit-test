var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'lib');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(SRC_PATH, 'index.js'),
  },
  resolve:{
    extensions: ['.js', '.json', '.vue'],
  },
  output: {
    path: BUILD_PATH,
    filename: 'vue-kit-test.min.js',
    library: 'vueKitTest',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              {
                // modules:false
              }
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  corejs: false,
                  helpers: true,
                  regenerator: false,
                  useESModules: false
                }
              ],
            ]
          }
        }
      },
      {
        test: /\.(sa|sc)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer(),
                cssnano({
                  preset: 'default',
                  autoprefixer: false,
                  'postcss-zindex': false,
                  'postcss-reduce-idents': false,
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ]
  }
};