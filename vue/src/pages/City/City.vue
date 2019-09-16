<template>
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
    data() {
      return {

      }
    }
  }
</script>

<style>


</style>
