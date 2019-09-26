<template>
  <main ref="main" class="container" :class="{ horizontal: !touch }">
    <component :is="comp" v-for="(comp, index) in components" ref="slides" :key="`${comp.name}${index}`" />
    <component :is="components[0]" ref="lastSlide" v-if="!touch" />
  </main>
</template>

<script>
/* eslint-disable no-console */
import createBus from '@/services/bus'
import touchDevice from '@/services/touch-device'
import Splash from '@/components/slides/splash'
import Contact from '@/components/slides/contact'

const bus = createBus()

export default {
  data() {
    return {
      xMax: null,
      components: [Splash, Contact],
      touch: false
    }
  },
  mounted() {
    this.touch = touchDevice()

    if (this.touch) return

    this.$once('hook:beforeDestroy', () => bus.stop())

    bus.$on('resized', this.updateResize)
    bus.$on('scrolled', this.updateScroll)

    bus.start(window)
  },
  methods: {
    updateResize() {
      const slides = this.$el.querySelectorAll('.slide')
      const lastSlide = slides[slides.length - 1]
      
      const page = this.$refs.main
      const w = page.scrollWidth - window.innerWidth + window.innerHeight
      document.body.style.height = w + 'px'

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
  }
}

.slide {
  flex: 0 0 100vw;

  display: flex;
}
</style>
