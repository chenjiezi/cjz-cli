<!--
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-01 22:07:34
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-02 10:58:24
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import './assets/css/k.scss';
:root {
  h1 {
    color: red;
  }
}
</style>