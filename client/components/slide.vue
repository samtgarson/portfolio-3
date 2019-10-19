<template>
  <section class="slide" :class="{ primary, accent }">
    <frame />
    <article>
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
  }
}

article {
  width: 100%;
  max-width: $max-width;
  min-height: 100%;
  min-height: 400px;
  padding: $padding $padding*2;

  @include big {
    max-height: 450px + ($padding * 2);
  }

  @include small {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $padding;
  }
}
</style>
