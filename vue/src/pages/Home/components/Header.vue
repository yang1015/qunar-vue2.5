<template>
  <div class="header">
    <div class="header-left" @click="goBack">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input placeholder="请输入城市"/>
    </div>
    <div class="header-right">城市
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    goBack () {
    }
  }
}
</script>

<style scoped lang='stylus'>
  @import '~@styles/variables.styl';

  .header
    display: flex
    height: .86rem
    background: $bgColor
    line-height .86rem
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
</style>
