import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 兼容 IE
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// // 设置 js中可以访问 $cdn
// import { $cdn } from '@/config'
// Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/styles/index.scss'
// 引入淘宝布局,移动端适配
import 'lib-flexible/flexible.js'

import FastClick from 'fastclick' // 解决300秒问题
FastClick.attach(document.body)

// 全局 filters
import './filters'

import '@/styles/index.scss' // global css

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
