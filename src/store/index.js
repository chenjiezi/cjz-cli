/*
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-02 10:17:44
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-11 10:03:10
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
