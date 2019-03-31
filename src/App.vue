<template>
  <div id="app">
    <grid />
  </div>
</template>

<script>
import Grid from './components/grid'

export default {
  name: 'app',
  components: {
    Grid
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Circular';
  font-style: normal;
  font-weight: normal;
  font-display: swap;
  src: url("./assets/fonts/CircularStd-Book.woff") format("woff");
}
@font-face {
  font-family: 'Circular';
  font-style: normal;
  font-weight: bold;
  font-display: swap;
  src: url("./assets/fonts/CircularStd-Medium.woff") format("woff");
}

html,
body {
  background-color: $blue;
  color: white;
  font-family: 'Circular', sans-serif;
  font-weight: normal;
  line-height: normal;
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
