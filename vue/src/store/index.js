import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

// 创建仓库
export default new Vuex.Store({
  state,
  mutations,
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city
    }
  }
})
// actions: {
//   changeCity(ctx, city) {
//     console.log(city);
//     ctx.commit('commitChangeCity', city)
//   }
// },
