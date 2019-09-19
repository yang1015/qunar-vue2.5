<template>
  <div class='home'>
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList = 'iconList'></home-icons>
    <home-recommendation :recommendList = 'recommendList'></home-recommendation>
    <home-weekend :weekendList = 'weekendList'></home-weekend>
  </div>
</template>

<script>
  import axios from 'axios'
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommendation from './components/Recommendation.vue'
  import HomeWeekend from './components/Weekend.vue'

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

    methods: {
      getHomeInfo() {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucceed)
      },

      getHomeInfoSucceed(res) {
        let data = res.data.data
        this.recommendList = data.recommendList;
        this.iconList = data.iconList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList
      }
    },

    mounted() {
      this.getHomeInfo();
    }
  }
</script>
