<!--
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-01 22:07:34
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-08 19:57:22
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(12)
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>