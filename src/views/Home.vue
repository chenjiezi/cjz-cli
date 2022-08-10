<!--
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-02 10:33:22
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-10 14:17:01
-->
<template>
  <div class="Home">
    <h1>Home</h1>
    <div>{{ $store.state.count }}</div>
    <button @click="$store.commit('increment')">+</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  created () {
    console.log(2);
  },
  mounted () {

  },
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>
