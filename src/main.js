/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 14:11:11
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 15:53:40
 */

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
