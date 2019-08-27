const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  resolve:{
    extensions: ['.js', '.json', '.vue'],
  },
  optimization: {
    minimize: true,
  },
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
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}