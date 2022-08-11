<!--
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-02 10:33:22
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-11 11:13:45
-->
<template>
  <div class="Home">
    <h1>Home</h1>
    <div>{{ $store.state.count }}</div>
    <button @click="$store.commit('increment')">+</button>
    <div class="text-red-500">test</div>
    <div class="text-green-400">test</div>
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
::placeholder {
  color: gray;
}

</style>
