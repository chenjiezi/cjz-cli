<!--
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-01 22:07:34
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-01 22:53:53
-->
<template>
  <div class="wrapper">
    <h1>hello SFC</h1>
    <div>asd11</div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('App.vue')
    console.log('test')
    const cjzFn = () => {
      console.log('test babel')
    }
    cjzFn()
    const cjz = 1
    console.log('cjz=>', cjz)
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  h1 {
    color: red;
  }
}
</style>