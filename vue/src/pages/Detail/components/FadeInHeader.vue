<template>
  <div class="fade-in-header-wrapper">
    <div v-show="!showFadeInStyle" class="back-style">
      <router-link tag = 'span' to = '/' class="iconfont">&#xe618;</router-link>
    </div>
    <div v-show="showFadeInStyle" class="fadein-style" :style="opacityStyle">{{sightName}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Header', // 这里的明明不能和引用时候的名字一样 不然报错
    props: {
      sightName: String
    },
    data() {
      return {
        showFadeInStyle: false,
        opacityStyle: {
          opacity: 0
        }
      }
    },

    activated() {
      window.addEventListener("scroll", this.onScroll);
    },

    methods: {
      onScroll() {
          const scrollTop = document.documentElement.scrollTop
          if (scrollTop > 60) {
            this.showFadeInStyle = true;
            if (scrollTop < 140) {
              this.opacityStyle = {
                opacity: scrollTop / 140
              }
            }
          } else {
            this.showFadeInStyle = false;
          }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl'
  .fade-in-header-wrapper
    height: .86rem
    color: #fff
    text-align center
    line-height: .86rem
    font-size: .33rem
    position: fixed
    top: 0
    left: 0
    right: 0
    .back-style
      float: left
      padding-left: .3rem
    .fadein-style
      background: $bgColor

</style>
