import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 所有任务列表
    list: [],
    // 文本框的内容
    inputValue: '',
    nextID: 5,
    viewKey: 'all'
  },
  mutations: {
    initList(state, list) {
      state.list = list
    },
    // 
    setInputvalue(state, val) {
      state.inputValue = val
    },
    addItem(state) {
      const obj = {
        id: state.nextID,
        info: state.inputValue.trim(),
        done: false,
      };
      state.list.push(obj);
      state.nextID++;
      state.inputValue = '';
    },
    // 根据 id 删除对应的任务
    removeItem(state, id){
      // 根据 id 查找对应的索引
      const i = state.list.findIndex(x=>x.id==id)
      // 根据索引，删除对应的元素
      if(i!=-1){
        state.list.splice(i, 1)
      }
    },
    // 修改列表项的checkbox
    changeStatus(state, param){
      const i = state.list.findIndex(x=>x.id==param.id)
      if(i!=-1){
        state.list[i].done=param.status;
      }
    },
    // 清除已完成的任务
    cleanDone(state){
      state.list = state.list.filter(x=>x.done===false)
    },
    changeViewKey(state, key){
      state.viewKey = key
    }
  },
  getters: {
    // 动态：统计未完成的任务的条数
    unDoneLength(state){
      return state.list.filter(x=>x.done===false).length
    },
    infoList(state){
      if(state.viewKey==='all'){
        return state.list
      }
      if(state.viewKey==='undone'){
        return state.list.filter(x=>!x.done)
      }
      if(state.viewKey==='done'){
        return state.list.filter(x=>x.done)
      }
      return state.list
    }
  },
  actions: {
    getList(context) {  // { data } 解构赋值
      axios.get('/list.json').then(({ data }) => {
        context.commit("initList", data)
      })
    }
  },
  modules: {
  }
})
