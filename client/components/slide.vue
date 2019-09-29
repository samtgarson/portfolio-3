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
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: $base;
  background-color: $white;

  &.primary {
    background-color: $base;

    &, * {
      color: $white;
    }
  }
}

article {
  width: 100%;
  max-width: 800px;
  height: 100%;
  min-height: 400px;
  max-height: 450px + ($padding * 2);
  padding: $padding;

  @media (max-width: 650px) {
    padding: $padding / 2;
  }
}
</style>
