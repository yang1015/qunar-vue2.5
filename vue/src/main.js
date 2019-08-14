import Vue from 'vue'
import App from './App'
import router from './router'

// @符号代表src目录
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'

import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
