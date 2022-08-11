/*
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-02 10:17:27
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-11 10:03:01
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './staticRouter.js';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes
});
