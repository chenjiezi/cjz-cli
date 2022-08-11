/*
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-04 18:52:26
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-11 11:11:58
 */
const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  publicPath: process.env.NODE_ENV === 'production' ? '/autonomy/' : '/autonomy/rsh/'
};
