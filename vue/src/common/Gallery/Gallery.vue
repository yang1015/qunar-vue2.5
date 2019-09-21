<template>
  <div class = "gallery-banner" @click = "clickGallery">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(item, index) of galleryImgs" :key="index">
        <div class="gallery-swiper-img-wrapper">
          <img class='gallery-swiper-img' :src='item'/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    props: {
      galleryImgs: {
        type: Array,
        default() {
          return []
        }
      },
      showGallery: Boolean
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction', // swiper3官网
          loop: true,
          observeParents: true, // 会监控 当父级元素DOM发生变化时，自我刷新 解决siwper图片的宽度问题
          observer: true
        },
        showSwiper: false
      }
    },

    watch: {
      galleryImgs() {
        this.showSwiper = this.galleryImgs.length? true:false
      }
    },

    methods: {
      clickGallery() {
        this.$emit("handleClickGallery", false)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .gallery-banner
    background #000
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    z-index: 2
    display flex
    align-items center
    .gallery-swiper-img-wrapper
      height: 0
      overflow: hidden
      width: 100%
      padding-bottom 100%
      .gallery-swiper-img
        width: 100%
    .swiper-pagination
      color: #fff
</style>
