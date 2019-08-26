var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '../');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  mode: 'production',
  entry: {
    button: path.resolve(SRC_PATH, 'button/index.js'),
    card: path.resolve(SRC_PATH, 'card/index.js'),
    // index: path.resolve(SRC_PATH, 'index.js'),
  },
  resolve:{
    extensions: ['.js', '.json', '.vue'],
  },
  output: {
    path: BUILD_PATH,
    filename: '[name]/index.js',
    // filename: 'vue-kit-test.js',
    library: 'vueKitTest',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
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
                // loose: true,
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
              // '@babel/plugin-transform-object-assign'
            ]
          }
        }
      }
    ]
  }
};