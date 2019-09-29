<template>
  <div class="frame">
    <top-nav />
  </div>
</template>

<script>
import TopNav from './nav'

export default {
  components: { TopNav }
}
</script>

<style lang="scss" scoped>
.frame {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;

  * {
    pointer-events: auto;
  }

  // fix for iOS  https://stackoverflow.com/a/28640880
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    clip: auto;
    -webkit-mask-image: -webkit-linear-gradient(top, #ffffff 0%,#ffffff 100%);
  }
}
</style>
