import Vue from 'vue'
import App from './App'
import router from './router'

// @符号代表src目录
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 引入vuex状态仓库
import store from './store'

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
