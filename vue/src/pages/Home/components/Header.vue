<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input placeholder="请输入城市"/>
    </div>
    <router-link to="/city">
      <div class="header-right">{{city}}
        <span class="iconfont">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      city: String
    }
  }
</script>

<style scoped lang='stylus'>
  @import '~@styles/variables.styl';
  .header
    display: flex
    background: $bgColor
    height: $headerHeight
    line-height $headerHeight
    color #fff
    padding-left .1rem
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
      text-align left
      margin-left .1rem
      display flex
      align-items center
      position relative
      input
        box-sizing border-box
        width 100%
        padding-left .5rem
        border-radius .08rem
        position absolute
      .iconfont
        position absolute
        z-index 10
    .header-right
      width: 1.24rem
      float: right
      color #fff
</style>
