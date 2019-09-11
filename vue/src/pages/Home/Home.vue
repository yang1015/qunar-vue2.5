<template>
  <div class='home'>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommendation></home-recommendation>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
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
  }
}
</script>
