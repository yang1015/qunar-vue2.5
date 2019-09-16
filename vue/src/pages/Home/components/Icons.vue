<template>
  <div class='icons-wrapper'>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-container" v-for="(page, index) of pages" :key = "index">
        <div class='icon-item-container' v-for = "item of page" :key = "item.id">
          <div class='icon-img-container'>
            <img class='icon-img' :src="item.imgUrl"/>
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      iconList: Array
    },
    data() { // 子组件的data必须是一个返回值
      return {
        swiperOption: {

        },

      }
    },
    computed: {
      pages () {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const pageIndex = Math.floor(index / 8) // 计算当前下标应该在第几页
          if (!pages[pageIndex]) pages[pageIndex] = []
          pages[pageIndex].push(item)
        })
        return pages;
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .icons-wrapper >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon-item-container
    position relative
    width 25%
    height 0
    padding-bottom 25%
    overflow hidden
    float left
    .icon-img-container
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      padding .1rem
      box-sizing border-box
      .icon-img
        display block
        margin 0 auto
        height 100%
    .icon-text
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color #333
      text-align center
      ellipsis()



</style>
