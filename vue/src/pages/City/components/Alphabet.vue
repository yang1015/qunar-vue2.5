<template>
  <div class="alphabet-list">
    <ul>
      <li class="al-item">A</li>
      <li class="al-item">B</li>
      <li class="al-item">C</li>
      <li class="al-item">D</li>
      <li class="al-item">E</li>
      <li class="al-item">F</li>
      <li class="al-item">G</li>
      <li class="al-item">H</li>
      <li class="al-item">J</li>
      <li class="al-item">K</li>
      <li class="al-item">L</li>
      <li class="al-item">M</li>
      <li class="al-item">N</li>
      <li class="al-item">P</li>
      <li class="al-item">Q</li>
      <li class="al-item">R</li>
      <li class="al-item">S</li>
      <li class="al-item">T</li>
      <li class="al-item">W</li>
      <li class="al-item">X</li>
      <li class="al-item">Y</li>
      <li class="al-item">Z</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Alphabet",
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
