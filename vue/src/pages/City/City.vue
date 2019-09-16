<template>
<<<<<<< HEAD
    <div>city</div>
</template>

<script>
  export default {
    name: "City",
=======
  <div>
    <city-header></city-header>
    <city-search-box></city-search-box>
  </div>
</template>

<script>
  import CityHeader from './components/Header.vue'
  import CitySearchBox from './components/Search.vue'

  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearchBox
    },
>>>>>>> origin/index-router
    data() {
      return {

      }
    }
  }
</script>

<<<<<<< HEAD
<style lang="stylus" scoped>
=======
<style>

>>>>>>> origin/index-router

</style>
