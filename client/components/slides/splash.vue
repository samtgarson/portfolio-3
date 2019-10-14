<template>
  <slide id="splash" primary>
    <div class="wrapper">
      <div class="intro">
        <ul>
          <li>Tech Leadership</li>
          <li>Product Management</li>
          <li>Digital Strategy</li>
        </ul>
      </div>
      <div class="illustration">
        <img src="@/assets/img/sitting.svg"></img>
      </div>
    </div>
  </slide>
</template>

<script>
import Slide from '../slide'

export default {
  name: 'Splash',
  components: { Slide }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 2fr;

  @include big {
    height: 100%;
  }

  @include small {
    grid-template-rows: 1fr 3fr;
  }
}

.illustration {
  grid-area: 1 / 2 / 3 / 2;
  text-align: right;
}

.intro {
  grid-area: 2 / 1 / 2 / 3;
}

ul {
  padding: 0;
  margin: 0;
  border: 1px solid $white;
  padding: $padding;
  height: auto;

  @media (max-width: 650px) {
    padding: $padding / 2;
  }
}

li {
  list-style-type: none;
  line-height: 1em;
  margin-bottom: $padding / 2;

  @media (min-width: 650px) {
    font-size: 28px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
}

img {
  max-width: 100%;
  max-height: 100%;

  @media (min-width: 650px) {
    transform: scaleX(-1);
  }
}
</style>
