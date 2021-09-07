<template>
  <div>
    <h2>{{showNum()}}</h2>
    <h2>当前最新的count值：{{count}}</h2>
    <button @click="btnHandler">-</button>
    <button @click="subN(4)">-N</button>
    <button @click="subAsync">-1 async</button>
    <button @click="subNAsync(5)">-N async</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {  
    // mapState(['数据变量名称'])
    // 变量加载到此组件中
    ...mapState(['count'])
  },
  methods: {
    // mutation里的方法加载到此组件中，此修改，即全局修改
    // 导入方法，等于自己的方法
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', "subNAsync"]),
    ...mapGetters(['showNum']),
    btnHandler(){
      this.sub();//执行
    },
    btnNHandler(){
      this.subN(3);
    },
    btnAsyncHandler(){
      this.subAsync();
    }
  }
}
</script>