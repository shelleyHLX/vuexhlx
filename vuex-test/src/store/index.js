import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 只有mutation里的函数才可以修改state里的变量
  mutations: {
    // 此state就是上面的
    add(state){
      // 不要再 mutation里执行异步操作
      // setTimeout(()=>{
      //   state.count++
      // }, 1000)
      state.count++
    },
    addN(state, step){
      state.count += step;
    },
    sub(state){
      state.count--;
    },
    subN(state, step){
      state.count-=step;
    }
  },
  actions: {
    // context 可以看做是   new Vuex.Store({ 对象
    // 必须通过 content.commit()触发某个mutation才行
    addAsync(context){
      setTimeout(()=>{
        context.commit("add")
      }, 1000)
    },
    addNAsync(context, step){
      setTimeout(()=>{
        context.commit("addN", step)
      }, 1000)
    },
    subAsync(context){
      setTimeout(() => {
        context.commit("sub")
      }, 1000);
    },
    subNAsync(context, step){
      setTimeout(() => {
        context.commit("subN", step)
      }, 1000);
    }
  },
  getters: {
    showNum(state){
      return "当前最新："+state.count;
    }
  },
  modules: {
  }
})
