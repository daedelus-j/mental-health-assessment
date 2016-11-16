'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HappyPack = require('happypack');
const autoprefixer = require('autoprefixer');
const loaders = [
  { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader" ) },
  { test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css") },
  { test: /\.js$/, loaders: ['happypack/loader'], include: path.join(__dirname, 'client') },
  { test: /\.json(\?v=\d+\.\d+\.\d+)?$/,   loader: 'json' },
];
const postcss = {
  defaults: [
    require("postcss-cssnext"),
    autoprefixer({
      browsers: ['last 4 versions']
    })
  ]
};
const entries = {
  screener: './client/containers/screener',
};

module.exports = {

  devtool: 'source-map',

  entry: entries,

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.less'],
  },

  plugins: [
    new HappyPack({
      loaders: ['babel?presets[]=es2015']
    }),

    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].css'),
  ],
  postcss,

  module: {
    loaders: loaders
  }
};

