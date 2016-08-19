'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = {
  devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,

  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Healther',
      template: './src/index.jade'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass?sourceMap'])},
      {test: /\.jade/, exclude: /node_modules/, loader: 'jade-loader'},
      {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
    ]
  },
  postcss: [autoprefixer]
};
