var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entity: 'src',
  output: {
    filename: 'bundle.js',
    path: './public/assets'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  resolve: {
    alias: {
      'react-native': path.resolve('node_modules/react-native-web')
    }
  }
}

module.exports = config;
