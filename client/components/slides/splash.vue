<template>
  <slide id="splash" primary>
    <div class="wrapper">
      <div class="illustration">
        <img src="@/assets/img/sitting.svg"></img>
      </div>
      <div class="intro">
        <repeat-text text="Tell stories," />
        <repeat-text text="have arguments" :odd="false" />
        <repeat-text text="& build things" />
      </div>
    </div>
  </slide>
</template>

<script>
import Slide from '../slide'
import RepeatText from '../repeat-text'

export default {
  name: 'Splash',
  components: { Slide, RepeatText }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 2fr;

  @include small {
    display: flex;
    align-items: center;
  }
}

.illustration {
  grid-area: 1 / 2 / 3 / 2;
  text-align: right;
  z-index: 20;
}

.intro {
  grid-area: 2 / 1 / 2 / 3;
  overflow-x: hidden;
  position: relative;
  .repeat-text ::v-deep span {
  }
}

img {
  max-width: 100%;
  max-height: 90%;

  @include small {
    display: none;
  }
}
</style>
