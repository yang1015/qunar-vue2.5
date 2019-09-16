<template>
  <div class="search">
      <input type="text" placeholder="请输入您想搜索的城市或拼音~~"/>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl';
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    color #fff
    input
      box-sizing border-box
      padding 0 .1rem
      width 100%
      height .62rem
      line-height: .62rem
      text-align center
      border-radius .06rem
</style>
