/*
* @Description: 
* @Author: chenjz
* @Date: 2022-08-04 17:55:04
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-05 15:34:56
*/

// TODO: devServer终端显示内容自定义

const { merge } = require("webpack-merge")
const common = require('./webpack.common.js')
const paths = require('./paths.js')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: paths.devPublicPath,
  },
  devtool: 'inline-source-map',
  devServer: {},
  plugins: [
    // bundle体积可视化
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})