<!--
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-06-06 15:59:39
 * @LastEditors: chenjz
 * @LastEditTime: 2022-06-06 16:27:44
-->
<template>
  <div>
    <h1>{{name}}</h1>
    <p>获取vuex里面的数据=>{{vuexName}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const name = ref('cjz')
    const store = useStore()
    const vuexName = computed(() => store.state.name)


    return {
      name,
      vuexName
    }
  }
})
</script>