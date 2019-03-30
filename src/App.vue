<template>
  <div id="app">
    <background />
    <h1>hello</h1>
  </div>
</template>

<script>
import Background from '@/components/background'

export default {
  name: 'app',
  components: {
    Background
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
