<template>
  <div>
    <div class="search">
      <input v-model='searchingWord' type="text" placeholder="请输入您想搜索的城市或拼音~~"/>
    </div>

    <div class="associative-words-list" ref="wrapper" v-show="showAssociativeWords">
      <ul>
        <li v-for="(item, index) of associativeWords" :key="index"
            class="associative-word border-bottom">
          {{item.name}}
        </li>
        <li v-show="showResultNotFound" class="associative-word">
          没有找到相关城市
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: 'Search',
    props: {
      cities: Object
    },
    data() {
      return {
        searchingWord: '',
        associativeWords: [],
        timer: null,
        showAssociativeWords: false,
        showResultNotFound: false
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)  // ref获取dom
    },
    //    "A":
    //      [{
    //      "id": 57,
    //      "spell": "akesu",
    //      "name": "阿克苏"
    //        }
    //        ...
    //      ]

    watch: {
      searchingWord() {
        this.showAssociativeWords = true
        let searchingWord = this.searchingWord

        // 删光搜索字符的时候 隐藏联想&清空数组&返回
        if (!searchingWord) {
          this.associativeWords = []
          this.showAssociativeWords = false
          return;
        }

        let associativeWords = []
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          for (let key in this.cities) {
            for (let i = 0; i < this.cities[key].length; i++) {
              let item = this.cities[key][i];
              if (item.spell.indexOf(searchingWord) != -1 || item.name.indexOf(searchingWord) != -1) {
                associativeWords.push(item)
              } else {
                this.showResultNotFound = true;
              }
            }
          }
          this.associativeWords = associativeWords;
        }, 20)
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl';
  .border-bottom
    &:before
      border-color: #ccc

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

  .associative-words-list
    overflow hidden
    position absolute
    top: 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background #fff
    .associative-word
      padding 0.25rem 0.3rem

</style>
