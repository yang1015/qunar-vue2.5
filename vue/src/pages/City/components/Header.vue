<template>
  <div class="header">
      国内城市
  </div>
</template>

<script>
    export default {
      name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl';
  .header
    background $bgColor
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff

</style>
