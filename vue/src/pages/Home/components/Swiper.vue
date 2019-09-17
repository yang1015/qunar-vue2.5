<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if = "showSwiper">
      <!--使用的是vue-awesome-swiper-->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class='swiper-img' :src='item.imgUrl'/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeSwiper',
    props: {
      swiperList: Array
    },
//    子组件使用data时 是一个函数
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper() {
        if (this.swiperList.length) return true;
      }
    }
  }
</script>
<style scoped lang='stylus'>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 30.67%
    background #eaeaea
    .swiper-img
      width 100%
</style>


