import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home/Home.vue'
// import City from '@/pages/City/City.vue'
// import Detail from '@/pages/Detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('@/pages/Home/Home.vue')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import ('@/pages/City/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import ('@/pages/Detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    //第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    return { x: 0, y: 0 }
  }
})
