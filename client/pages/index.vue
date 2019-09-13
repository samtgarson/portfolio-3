<template>
  <main ref="main" class="container">
    <component :is="comp" v-for="(comp, index) in components" ref="slides" :key="`${comp.name}${index}`" />
    <component :is="components[0]" ref="lastSlide" />
  </main>
</template>

<script>
/* eslint-disable no-console */
import createBus from '@/assets/bus'
import Splash from '@/components/slides/splash'
import Contact from '@/components/slides/contact'

const bus = createBus()

export default {
  data() {
    return {
      xMax: null,
      components: [Splash, Contact]
    }
  },
  provide: {
    bus
  },
  mounted() {
    this.$once('hook:beforeDestroy', bus.stop)

    bus.$on('resized', this.updateResize)
    bus.$on('scrolled', this.updateScroll)

    bus.start(window)
  },
  methods: {
    updateResize() {
      const page = this.$refs.main
      const w = page.scrollWidth - window.innerWidth + window.innerHeight
      document.body.style.height = w + 'px'

      const lastSlide = this.$refs.lastSlide.$el
      this.xMax = lastSlide.getBoundingClientRect().left + window.scrollY
      this.resized = false
    },
    updateScroll() {
      const page = this.$refs.main
      const y = document.body.getBoundingClientRect().top
      page.scrollLeft = -y

      // Looping Scroll.
      const diff = window.scrollY - this.xMax
      if (diff === 0) {
        window.scrollTo(0, diff)
      } else if (window.scrollY === 0) {
        window.scrollTo(0, this.xMax)
      }
      this.scrolled = false
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
}

.slide {
  flex: 0 0 100vw;
}
</style>
