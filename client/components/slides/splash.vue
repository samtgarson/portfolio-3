<template>
  <slide id="splash" primary>
    <div class="wrapper">
      <div class="illustration">
        <img src="@/assets/img/sitting.svg"></img>
      </div>
      <div class="intro">
        <repeat-text text="Tech Lead" />
        <repeat-text text="Product Manager" :odd="false" />
        <repeat-text text="Digital Strategy" />
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 2fr;

  @include big {
    height: 100%;
  }

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
    @include small {
      font-size: 1.4em;
    }
  }
}

img {
  max-width: 100%;
  max-height: 80%;

  @include small {
    display: none;
  }
}
</style>
