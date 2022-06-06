/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 14:11:11
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-06 16:25:06
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

createApp(App).use(router).use(store).mount('#app')