import Vue from 'vue'
import App from './App.vue'
import store from './store'
// 1. 组件库
import Antd from "ant-design-vue"
// 2. 样式表
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
