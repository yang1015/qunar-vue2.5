<template>
  <div>
    <div class='recommendation-title'>
      热销推荐
    </div>

    <ul class="recommendation-list">
      <li class='recommendation-item-wrapper' v-for = '(item, index) of recommendationList' :key="item.id">
        <div class='recommendation-item' >
          <img class='recommendation-item-image' :src='item.imgUrl'/>
          <div class="recommendation-item-content">
            <p class="recommendation-item-title">{{item.title}}</p>
            <p class="recommendation-item-desc">{{item.desc}}</p>
            <p class="recommendation-item-price"><span id="dollar-sign">￥</span><span id="price">99</span><span
              id="start-from">起</span></p>
          </div>
        </div>
        <div v-if='item.id !== recommendationList.length - 1' class='gray-border'/>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'HomeRecommendation',
    data() {
      return {
        recommendationList: [
          {
            id: 0,
            title: '宁波海洋世界',
            desc: '浪漫首站，浪漫的海洋主题乐园',
            priceStarsFrom: 99,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/17/763b26f0e0b95c6493835fbb.jpg_200x200_26a1c82e.jpg'
          },
          {
            id: 1,
            title: '宁波海洋世界',
            desc: '浪漫首站，浪漫的海洋主题乐园',
            priceStarsFrom: 99,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/17/763b26f0e0b95c6493835fbb.jpg_200x200_26a1c82e.jpg'
          },
          {
            id: 2,
            title: '宁波海洋世界',
            desc: '浪漫首站，浪漫的海洋主题乐园',
            priceStarsFrom: 99,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/17/763b26f0e0b95c6493835fbb.jpg_200x200_26a1c82e.jpg'
          },
          {
            id: 3,
            title: '宁波海洋世界',
            desc: '浪漫首站，浪漫的海洋主题乐园',
            priceStarsFrom: 99,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/17/763b26f0e0b95c6493835fbb.jpg_200x200_26a1c82e.jpg'
          },
          {
            id: 4,
            title: '宁波海洋世界',
            desc: '浪漫首站，浪漫的海洋主题乐园',
            priceStarsFrom: 99,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/201301/17/763b26f0e0b95c6493835fbb.jpg_200x200_26a1c82e.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .recommendation-title
    background #eee
    padding .3rem

  .recommendation-item
    display flex
    justify-content flex-start
    padding .2rem
    .recommendation-item-image
      width 1.8rem
      height 1.8rem
      margin-right .2rem
    .recommendation-item-content
      line-height 1.6
      position relative
      .recommendation-item-title
        font-size 1.1em
        font-weight 500
      .recommendation-item-desc
        color darkgrey
      .recommendation-item-price
        position absolute
        bottom 0
        #dollar-sign
          color darkorange
          font-size .88em
        #price
          color darkorange
          font-size 1.2em
          margin-right 2px
        #start-from
          font-size .88em

  .gray-border
    height 1px
    background lightgray
    margin-left .2rem
    width calc(100% - .2rem)

</style>
