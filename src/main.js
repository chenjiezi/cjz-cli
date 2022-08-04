/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 14:11:11
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-03 11:51:13
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import App from './App.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

function Demo() {
  const a = 'asd2saasasasas'
  console.log('demo', a)
}

const demo = new Demo()
