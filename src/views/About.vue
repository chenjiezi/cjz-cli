<!--
 * @Description:
 * @Author: chenjz
 * @Date: 2022-08-02 10:33:22
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-10 16:26:26
-->
<template>
  <div class="About">
    <h1
      a="1"
      n="1"
    >About1</h1>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {},
  data () {
    return {

    };
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    console.log(1);
    console.log(1);
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.About {
  h1 {
    color: pink;
  }
}
</style>
