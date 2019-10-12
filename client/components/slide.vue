<template>
  <section class="slide">
    <frame />
    <article>
      <slot />
    </article>
  </section>
</template>

<script>
import Frame from './frame'

export default {
  components: { Frame }
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

  &.primary {
    color: $white;
    background-color: $base;
  }
}

article {
  width: 100%;
  max-width: 800px;
  min-height: 100%;
  min-height: 400px;
  padding: $padding $padding*2;

  @include big {
    max-height: $slide-height;
  }

  @include small {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $padding;
  }
}
</style>
