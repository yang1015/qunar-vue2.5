<template>

  <!--<ul v-for="(item, key) of cities" :key="key">-->
  <ul class="alphabet-list">
    <li class="al-item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="clickAlphabet(item)"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchmove="handleTouchMove">{{item}}
    </li>
  </ul>

</template>
<script>
  export default {
    name: "Alphabet",
    props: {
      cities: Object
    },

    data() {
      return {
        touchStarted: false,
        startY: 0,
        timer: null
      }
    },

    updated() {
      this.startY = this.$refs['A'][0].offsetTop; // 其offsetParent为元素alphabet-list吧？
    },

//    mounted() {
//      const letters = [];
//      for (let key in this.cities) {
//        letters.push(key);
//      }
//      this.letters = letters;
//    },

    // 我其实不是很理解为啥不能写在mounted里
    computed: {
      letters() {
        const letters = [];
        for (let key in this.cities) {
          letters.push(key);
        }
        return letters;
      }
    },

    methods: {
      clickAlphabet(e) {
        this.$emit('clickInAlphabet', e)
      },
      handleTouchStart(e) {
        this.touchStarted = true;
      },
      handleTouchMove(e) {
        if (this.touchStarted) {
          if (this.timer) clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            const currentY = e.touches[0].clientY;
            // const distanceMoved = currentY - this.startY - 79;
            let index = Math.floor(( currentY - this.startY - 79) / 16);
            if (index >= 0 && this.letters.length) this.$emit('clickInAlphabet', this.letters[index])
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStarted = false;
      }
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
    background lavender
    .al-item
      margin .06rem 0
      font-size .2rem

</style>
