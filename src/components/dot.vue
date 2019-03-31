<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    class="dot-wrapper"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <circle cx="50" cy="50" r="3" fill="white" ref="dot" />
    <circle cx="50" cy="50" r="1" stroke="white" stroke-width="0.5" fill="none" ref="halo" />
  </svg>
</template>

<script>
import decouple from 'decouple'
import anime from 'animejs'

const getCenter = t => {
  const {
    top, left, width, height
  } = t.getBoundingClientRect()
  const cx = left + (width / 2)
  const cy = top + (height / 2)
  return {
    cx, cy, width, height
  }
}

const getDelta = ({ target, clientX: x, clientY: y }) => {
  const { cx, cy, width, height } = getCenter(target)
  const dx = (x - cx) / width * 100
  const dy = (y - cy) / height * 100
  return {
    dx, dy
  }
}

const DOT_FACTOR = 20
const HALO_FACTOR = 8
const HALO_RADIUS = 15
const MOUSEMOVE = 'mousemove'
const TOUCHMOVE = 'touchmove'

export default {
  data () {
    return {
      listeners: {}, entering: Promise.resolve(), dotLeaving: false, haloLeaving: false
    }
  },
  mounted () {
    this.listeners = {
      MOUSEMOVE: decouple(this.$el, MOUSEMOVE, this.onMouseMove.bind(this)),
      TOUCHMOVE: decouple(this.$el, TOUCHMOVE, this.onMouseMove.bind(this))
    }
  },
  computed: {
  },
  beforeDestroy () {
    if (!this.listener) return
    this.$el.removeEventListener(MOUSEMOVE, this.listeners[MOUSEMOVE])
    this.$el.removeEventListener(TOUCHMOVE, this.listeners[TOUCHMOVE])
  },
  methods: {
    async onMouseMove (e) {
      const { dx, dy } = getDelta(e)

      anime.set(this.$refs.dot, {
        cx: (dx / DOT_FACTOR) + 50,
        cy: (dy / DOT_FACTOR) + 50
      })

      const haloParams = {
        cx: (dx / HALO_FACTOR) + 50,
        cy: (dy / HALO_FACTOR) + 50
      }
      if (!this.entering) haloParams.r = HALO_RADIUS
      anime.set(this.$refs.halo, haloParams)
    },
    async onMouseEnter () {
      if (this.dotLeaving) this.dotLeaving.pause()
      if (this.haloLeaving) this.haloLeaving.pause()

      const halo = anime({
        targets: this.$refs.halo,
        r: HALO_RADIUS,
        duration: 1500
      })

      this.entering = halo
    },
    async onMouseLeave () {
      if (this.entering) this.entering.pause()
      this.dotLeaving = anime({
        targets: this.$refs.dot,
        cx: 50,
        cy: 50,
        duration: 1000
      })

      this.haloLeaving = anime({
        targets: this.$refs.halo,
        duration: 1000,
        cx: 50,
        cy: 50,
        r: 1,
        easing: 'easeOutQuint'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dot-wrapper {
  position: relative;
}

circle {
  pointer-events: none;
}

// .dot,
// .halo {
//   border-radius: 100px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
// }

// .dot {
//   width: 10px;
//   height: 10px;
//   margin-top: -5px;
//   margin-left: -5px;
//   background-color: white;
// }

// .halo {
//   width: 0px;
//   height: 0px;
//   border: 1px solid white;
// }
</style>
