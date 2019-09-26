<template>
  <section class="slide">
    <div class="name-wrapper">
      <name />
    </div>
    <article>
      <slot />
    </article>
  </section>
</template>

<script>
import Name from './name'

export default {
  components: { Name }
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
  background-color: white;

  &.primary {
    background-color: $base;
    color: white;
  }
}

.name-wrapper {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;

  // fix for iOS  https://stackoverflow.com/a/28640880
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    clip: auto;
    -webkit-mask-image: -webkit-linear-gradient(top, #ffffff 0%,#ffffff 100%);
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

  @media (max-width: 400px) {
    // height: auto;
  }
}
</style>
