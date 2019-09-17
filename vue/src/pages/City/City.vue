<template>
  <div>
    <city-header></city-header>
    <city-search-box></city-search-box>
    <city-list :cities = 'cities' :hotCities = 'hotCities' :letterClicked = 'letterClicked'></city-list>
    <city-alphabet :cities = 'cities' @clickInAlphabet = 'handleAlphabetClicked'></city-alphabet>
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
    data() {
      return {
        cities: {},
        hotCities: [],
        letterClicked: 'A'
      }
    },
    methods: {
      getCities(res) {
        this.hotCities = res.data.data.hotCities;
        this.cities = res.data.data.cities;
      },

      handleAlphabetClicked(letter) {
        this.letterClicked = letter;
      }
    }
  }
</script>



<style lang="stylus" scoped>

</style>
