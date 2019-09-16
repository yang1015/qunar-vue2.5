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
    props: {
      weekendList: Array
    },
    data() {
      return {
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
