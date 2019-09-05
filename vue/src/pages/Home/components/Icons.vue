<template>
  <div class='icons-wrapper'>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-container" v-for="(page, index) of pages" :key = "index">
        <div class='icon-item-container' v-for = "item of page" :key = "item.id">
          <div class='icon-img-container'>
            <img class='icon-img' :src="item.imgUrl"/>
          </div>
          <p class="icon-text">{{item.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    data() { // 子组件的data必须是一个返回值
      return {
        swiperOption: {

        },
        iconList: [
          {
            id: '0',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            text: '景点门票景点门票'
          },
          {
            id: '1',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            text: '名胜古迹'
          },
          {
            id: '2',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            text: '自然风光'
          },
          {
            id: '3',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            text: '漂流'
          },
          {
            id: '4',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png',
            text: '一日游'
          },
          {
            id: '5',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            text: '影视基地'
          },
          {
            id: '6',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
            text: '景点门票'
          },
          {
            id: '7',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
            text: '宁波必游'
          },
          {
            id: '8',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            text: '水上玩乐'
          }
        ]
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
