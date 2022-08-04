/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-02 10:32:34
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-03 15:46:51
 */

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "group-common" */'@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "group-common" */'@/views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "group-common" */'@/views/Test.vue')
  }
]