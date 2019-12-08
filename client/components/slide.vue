<template>
  <section class="slide" :class="{ primary, accent, pink, white }">
    <frame />
    <article :class="{ fullscreen, centered }">
      <slot />
    </article>
  </section>
</template>

<script>
import Frame from './frame'

export default {
  components: { Frame },
  props: {
    primary: { type: Boolean, default: false },
    accent: { type: Boolean, default: false },
    pink: { type: Boolean, default: false },
    fullscreen: { type: Boolean, default: false },
    white: { type: Boolean, default: false },
    centered: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: $base;
  background-color: $white;

  @include colour(true) using ($text, $bg) {
    color: $text;
    background-color: $bg;

    input,
    textarea {
      color: $text;
    }
  }
}

article {
  width: 100%;
  max-width: $max-width;
  min-height: 400px;
  padding: $padding $padding*2;
  margin: 15vh auto;

  @include small {
    padding: $padding / 2;
  }

  &.centered {
    margin: auto;
    height: 100vh;

    @include big {
      max-height: $max-height;
    }

    @include small {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: $max-width * 0.75;
    }
  }

  &.fullscreen {
    max-width: none;
    max-height: none !important;
    padding: 0;
    justify-content: center;
  }
}
</style>
