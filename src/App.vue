<!--
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-01 22:07:34
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 16:59:12
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {notice} from './order'
export default {
  name: 'App',
  mounted () {
    notice[0].list['功率'].change()
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>