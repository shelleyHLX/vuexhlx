<template>
  <div>
    <h2>{{$store.getters.showNum}}</h2>
    <h2>当前最新的count值：{{this.$store.state.count}}</h2>
    <button @click="btnHandler">+</button>
    <button @click="btnNHandler">+N</button>
    <button @click="btnAsyncHandler">+1 async</button>
    <button @click="btnNAsyncHandler">+N async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // btnHandler() {
    //   this.$store.state.count++
    // }
    btnHandler() {  
      // 触发 mutation里的函数，方法名
      this.$store.commit("add")
    },
    btnNHandler() {
      // 触发 mutation里的函数，方法名，方法的参数
      this.$store.commit("addN", 3)
    },
    // 异步
    btnAsyncHandler() {
      // dispatch 专门触发 action
      this.$store.dispatch("addAsync")
    },
    btnNAsyncHandler() {
      this.$store.dispatch("addNAsync", 4)
    }
  }
}
</script>