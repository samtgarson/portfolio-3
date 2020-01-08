<template>
  <main ref="main" class="container" :class="{ horizontal: !touch }">
    <component :is="comp" v-for="(comp, index) in components" ref="slides" :key="`${comp.name}${index}`" />
    <component :is="components[0]" ref="lastSlide" v-if="!touch" />
  </main>
</template>

<script>
import Splash from './slides/splash.vue'
import About from './slides/about.vue'
import Things from './slides/things.vue'
import Pictures from './slides/pictures.vue'
import Contact from './slides/contact.vue'

export default {
  data() {
    return {
      xMax: null,
      components: [Splash, About, Things, Pictures, Contact],
      touch: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';

main {
  &.horizontal {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    white-space: nowrap;

    * {
      white-space: normal;
    }
  }
}

.slide {
  flex: 0 0 100vw;

  display: flex;
}
</style>
