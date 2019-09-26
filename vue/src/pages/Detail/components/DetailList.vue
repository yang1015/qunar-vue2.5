<template>
  <div>
    <div v-for="(item, index) of categoryList" :key="index">
      <div class="item-title border-bottom" @click="foldOrUnfold(index)">
        <span class="item-title-icon"/>
        {{item.title}}
      </div>
      <div v-show="index == clickedIndex" v-if="item.children && item.children.length > 0" class="item-children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailList',
    props: {
      categoryList: Array
    },
    data() {
      return {
        clickedIndex: -1
      }
    },
    methods: {
      foldOrUnfold(clickedIndex) {
        // 点A 展开 再次点A 重置为-1收起。
        if (clickedIndex == this.clickedIndex) this.clickedIndex = -1
        else this.clickedIndex = clickedIndex;

      }
    }
  }
</script>

<style lang="stylus" scoped>

  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem

  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem

  .item-children
    padding: 0 .2rem


</style>
