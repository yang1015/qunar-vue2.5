<template>
  <div class="header">
    <span class="iconfont" @click="backToHome">&#xe624;</span>
    <p>国内城市</p>
  </div>
</template>

<script>
  export default {
    name: "CityHeader",
    methods: {
      backToHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl';
  .header
    background $bgColor
    height $headerHeight
    line-height $headerHeight
    color #fff
    .iconfont
      float: left
      padding-left: .2rem
    p
      text-align: center

</style>
