<template>
  <div class="detail-page-wrapper">
    <detail-banner :bannerData="bannerData"></detail-banner>
    <fade-in-header :sightName="bannerData.sightName"></fade-in-header>
    <detail-list :categoryList = "categoryList"></detail-list>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailBanner from './components/DetailBanner.vue'
  import FadeInHeader from './components/FadeInHeader.vue'
  import DetailList from './components/DetailList.vue'

  export default {
    name: "City-Detail",
    components: {
      DetailBanner,
      FadeInHeader,
      DetailList
    },

    data() {
      return {
        bannerData: {},
        categoryList: []
      }
    },

    mounted() {
      // mounted只进一次 所以如果在这里取数据 那么再加上keepalive 数据将不会再更新
      this.id = this.$route.params.id
      this.getDetail(this.id)
    },

//    activated() {
//      this.id = this.$route.params.id
//      this.getDetail(this.id)
//    },

//    watch: {
//      '$route'(to, from) {
//        if (to.name == 'Detail') {
//          this.id = to.params.id
//          this.getDetail(this.id)
//        }
//      }
//    },

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

        this.categoryList = data.categoryList
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detail-page-wrapper
    height: 50rem
</style>
