<template>
  <div class="frame">
    <top-nav />
    <footer>
      <a href="#">Get in touch</a>
    </footer>
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
  z-index: 100;
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

footer {
  position: fixed;
  right: $padding / 2;
  width: 100vh;
  height: $padding;
  padding: 0 $padding;
  bottom: -$padding;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  transform: rotate(90deg);
  transform-origin: 100% 0%;

  @include dot($circle-size: 0.7rem);

  & > :last-child {
    @include big {
      @include line($position: 'after');
    }

    @include small {
      margin-right: $padding / 2; 
    }
  }


  a {
    text-decoration: none;
    font-weight: 300;
  }
}
</style>
