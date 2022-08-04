/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-04 18:52:26
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 20:46:34
 */
const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  devPublicPath: '/autonomy/rsh/',
  prodPublicPath: '/autonomy/'
}