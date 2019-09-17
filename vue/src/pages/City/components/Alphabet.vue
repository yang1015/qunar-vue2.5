<template>
  <div class="alphabet-list">
    <ul v-for="(item, key) of cities" :key="key">
      <li class="al-item">{{key}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Alphabet",
    props: {
      cities: Object
    },
    mounted() {
      this.height = document.documentElement.clientHeight;
      console.log(document.documentElement.clientHeight)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@styles/variables.styl';
  .alphabet-list
    position: fixed
    top: 1.58rem
    bottom: 0
    right: 0rem
    width: .4rem
    color: $blueColor
    display: flex
    flex-direction: column
    justify-content center
    .al-item
      margin .06rem 0
      font-size .2rem
</style>
