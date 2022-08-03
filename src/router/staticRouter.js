/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-02 10:32:34
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-02 10:55:45
 */

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  }
]