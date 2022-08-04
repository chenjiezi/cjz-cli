/*
* @Description: 
* @Author: chenjz
* @Date: 2022-08-04 17:55:04
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 19:09:14
*/
const { merge } = require("webpack-merge")
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
  },
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