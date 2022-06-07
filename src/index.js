/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 14:11:11
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-07 15:50:34
 */

import './assets/css/index.css'
import './assets/css/index.less'
import bdd from './assets/img/bdd.webp'
import { hello } from './assets/js/print.js'

const test = () => {
  console.log('bdd:', bdd);
  console.log('test webpack')
}

test()
hello()
