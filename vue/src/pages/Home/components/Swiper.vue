<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: '0001',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
          },
          {
            id: '0002',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/ffb06b600df4c655d10a1dfef4a8d0e9.jpg_750x200_7b1aec5e.jpg'
          },
          {
            id: '0003',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
          }
        ]
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
    padding-bottom 26.67%
    background #eaeaea
    .swiper-img
      width 100%
</style>


