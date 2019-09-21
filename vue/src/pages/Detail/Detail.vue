<template>
  <div class="detail-page-wrapper">
    <detail-banner :bannerData="bannerData"></detail-banner>
    <fade-in-header :sightName="bannerData.sightName"></fade-in-header>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailBanner from './components/DetailBanner.vue'
  import FadeInHeader from './components/FadeInHeader.vue'

  export default {
    components: {
      DetailBanner,
      FadeInHeader
    },

    data() {
      return {
        bannerData: {}
      }
    },

    mounted() {
      this.id = this.$route.params.id
      this.getDetail(this.id)
    },

    watch: {
      '$route'(to, from) {
        if (to.name == 'Detail') {
          this.id = to.params.id
          this.getDetail(this.id)
        }
      }
    },

    methods: {
      getDetail() {
        axios.get('/api/detail.json', {
          params: {
            id: this.id
          }
        })
          .then(this.getDetailSucceed)
      },

      getDetailSucceed(res) {
        let data = res.data.data
        this.bannerData = {
          sightName: data.sightName,
          bannerImg: data.bannerImg,
          galleryImgs: data.galleryImgs
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detail-page-wrapper
    height: 50rem
</style>
