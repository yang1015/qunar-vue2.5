<template>
  <div>
    <div v-show="!showGallery" class="banner-wrapper" @click="toggleShowGallery">
      <img class='banner-img' :src="bannerData.bannerImg"/>
      <div class="banner-desc">
        <p>{{bannerData.sightName}}</p>
        <span class="iconfont">&#xe624;</span>
      </div>
    </div>
    <full-screen-gallery v-show="showGallery" @handleClickGallery = "toggleGallery" :galleryImgs="bannerData.galleryImgs"></full-screen-gallery>
  </div>
</template>

<script>
  import FullScreenGallery from '@common/Gallery/Gallery.vue'

  export default {
    name: 'Banner',
    props: {
      bannerData: Object
    },
    components: {
      FullScreenGallery
    },
    data() {
      return {
        showGallery: false
      }
    },
    methods: {
      toggleShowGallery() {
        this.showGallery = !this.showGallery
      },
      toggleGallery(val) {
        this.showGallery = val;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner-wrapper
    position relative
    width 100%
    height 0
    overflow hidden
    padding-bottom 55%
    .banner-img
      width: 100%
    .banner-desc
      width: 100%
      box-sizing border-box
      padding-left .2rem
      padding-right .2rem
      position: absolute
      bottom: .2rem
      left: 0
      right: 0
      display: flex
      justify-content space-between
      color: #fff
      font-size .3rem
</style>
