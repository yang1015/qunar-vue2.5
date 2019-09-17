<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="list-area">
        <div class="list-title border-topBottom">当前城市</div>

        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>

      <div class="list-area">
        <div class="list-title border-topBottom">热门城市</div>

        <div class="button-list">
          <div v-for="(item, index) of hotCities" :key="item.id">
            <div class="button-wrapper">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="list-area">
        <div>

          <div v-for="(item, key) of cities" :key='key'>

            <div class="list-title border-topBottom">{{key}}</div>
            <div class="item-list">
              <div v-for="(innerItem, innerIndex) of cities[key]" :key="innerIndex">
                <div class="item-city-name border-bottom">{{innerItem.name}}</div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>

  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: "list",
    props: [
      'hotCities',
      'cities'
    ],
    mounted() {
      // ref获取dom
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  .border-topBottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc

  .border-bottom
    &:before
      border-color: #ccc

  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .list-area
      .list-title
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
      .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float: left
          width: 33.33%
          .button
            margin: .1rem
            padding: .1rem 0
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
      .item-list
        .item-city-name
          line-height: .76rem
          padding-left: .2rem

</style>
