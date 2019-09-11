<template>
  <div>
    <div class="weekend-title">周末去哪儿游</div>
    <ul>
      <li class="weekend-item" v-for ='(item, index) of weekendList' :key ='item.id'>
        <div class="weekend-image-wrapper">
          <img class="weekend-image" :src="item.imgUrl"/>
        </div>

        <div class="weekend-title-content">
          <p class="weekend-item-title">{{item.title}}</p>
          <p class="weekend-item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    data() {
      return {
        weekendList: [
          {
            id: 0,
            title:'美丽普陀山',
            desc:'人间仙境杭州，佛教圣地普陀山等你来玩!人间仙境杭州，佛教圣地普陀山等你来玩！人间仙境杭州，佛教圣地普陀山等你来玩',
            imgUrl:'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg'
          },
          {
            id: 1,
            title:'宁波必打卡',
            desc:'宁波美腻到骨子里，不可言喻',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/b2/5e303795b9aadf.jpg_r_640x214_50ec7a9c.jpg'
          },
          {
            id: 2,
            title:'古村周末游',
            desc:'古村古镇古城，带宝贝品味宁波的古老文化，古村古镇古城，带宝贝品味宁波的古老文化',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/8d/515b8d66615759.jpg_r_640x214_1b965305.jpg'
          },
          {
            id: 3,
            title:'户外自由行',
            desc:'爬山？赏花？烧烤？周末想干嘛都行，大美宁波大美宁波大美宁波大美宁波大美宁波',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/b7/7482fcba9424fe.jpg_r_640x214_ae13d3ab.jpg'
          },

        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .weekend-title
    background #eee
    padding .3rem

  .weekend-image-wrapper
    height 0
    overflow hidden
    padding-bottom 34%
    .weekend-image
      width 100vw

  .weekend-title-content
    padding .2rem .3rem
    line-height 1.8em
    .weekend-item-title
      font-size 1.08em
    .weekend-item-desc
      font-size .88em
      color darkgray
      ellipsis()

</style>
