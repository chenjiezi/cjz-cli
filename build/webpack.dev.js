/*
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-04 17:55:04
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-11 11:12:10
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths.js');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: paths.publicPath
  },
  stats: 'errors-warnings',
  devtool: 'inline-source-map',
  devServer: {
    open: [paths.publicPath]
  },
  plugins: [
    new DashboardPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
});
