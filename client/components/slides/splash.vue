<template>
  <slide id="splash">
    <div class="wrapper">
      <div class="intro">
        <name />
        <ul>
          <li>Product Management</li>
          <li>Tech Leadership</li>
          <li>Digital Strategy</li>
        </ul>
      </div>
      <div class="illustration">
        <img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16f3/e2cf/fee0b5801289303d01ebe9e531c482f6"></img>
      </div>
    </div>
  </slide>
</template>

<script>
import Slide from '../slide'
import Name from '../name'

export default {
  components: { Slide, Name }
}
</script>

<style lang="scss" scoped>
.slide {
  background-color: $base;
  color: white;
}

.wrapper {
  display: flex;
  flex-flow: row nowrap;
}

.illustration {
  flex: 0 0 45%;
}

.intro {
  flex: 0 0 55%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 30px 0;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}

img {
  max-width: 100%;
  transform: scaleX(-1);
}
</style>
