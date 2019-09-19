<template>
  <div class='home'>
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommendation :recommendList='recommendList'></home-recommendation>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
  import axios from 'axios'
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommendation from './components/Recommendation.vue'
  import HomeWeekend from './components/Weekend.vue'

  import Vuex from 'vuex'
  import {mapState} from 'vuex'

  export default {
    name: 'home',
    components: {
      HomeWeekend,
      HomeRecommendation,
      HomeHeader,
      HomeSwiper,
      HomeIcons
    },

    data() {
      return {
        recommendList: [],
        iconList: [],
        swiperList: [],
        weekendList: []
      }
    },

    computed: {
      ...mapState({
        'currentCity': 'city' // 重命名
      })
    },

    mounted() {
      console.log("mounted")
      this.lastCity = this.currentCity;
      this.getHomeInfo();
    },

    activated() {
      console.log("activated")
      // 如果当前选择的城市是上一次选择的城市 那么不请求接口; 反之请求
      if (this.lastCity !== this.currentCity) {
        this.getHomeInfo();
        this.lastCity = this.currentCity
      }
    },

    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.currentCity)
          .then(this.getHomeInfoSucceed)
      },

      getHomeInfoSucceed(res) {
        let data = res.data.data
        this.recommendList = data.recommendList;
        this.iconList = data.iconList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList
      },

      destroyed() {
        console.log("destroyed")
      }
    }
  }
</script>
