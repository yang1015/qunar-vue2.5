<template>
  <div>
    <city-header></city-header>
    <city-search-box></city-search-box>
    <city-list :cities = 'cities' :hotCities = 'hotCities'></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios';
  import CityHeader from './components/Header.vue'
  import CitySearchBox from './components/Search.vue'
  import CityList from './components/List.vue'
  import CityAlphabet from './components/Alphabet.vue'

  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearchBox,
      CityList,
      CityAlphabet
    },
    mounted() {
      axios.get('/api/city.json')
        .then(this.getCities)
        .catch(e => {
          console.log(e)
        })
    },
<<<<<<< HEAD

    data() {
      return {}
=======
    data() {
      return {
        cities: [],
        hotCities: []
      }
    },
    methods: {
      getCities(res) {
        this.hotCities = res.data.data.hotCities;
        this.cities = res.data.data.cities;

      },
>>>>>>> origin/city-list
    }
  }
</script>

<<<<<<< HEAD
<style lang="stylus" scoped>

=======

<style lang="stylus" scoped>
>>>>>>> origin/city-list

</style>
