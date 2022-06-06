/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 16:19:46
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-06 16:22:05
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Me from './views/Me.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})

export default router
