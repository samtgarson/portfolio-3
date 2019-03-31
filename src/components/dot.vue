<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    class="dot-wrapper"
    :class="{ active: active && !entering }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <circle cx="50" cy="50" r="3" fill="white" ref="dot" />
    <circle
      cx="50"
      cy="50"
      r="1"
      stroke="white"
      stroke-width="0.5"
      fill="none"
      ref="halo"
      class="halo"
      :class="`delay-${i}`"
    />
  </svg>
</template>

<script>
import decouple from 'decouple'
import anime from 'animejs'
import {
  DOT_FACTOR,
  HALO_FACTOR,
  HALO_RADIUS,
  MOUSEMOVE,
  TOUCHMOVE
} from '@/assets/constants'

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

export default {
  data () {
    return {
      listeners: {},
      entering: false,
      dotLeaving: false,
      haloLeaving: false
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    i: Number
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
    onMouseMove (e) {
      const { dx, dy } = getDelta(e)
      const cx = (dx / DOT_FACTOR) + 50
      const cy = (dy / DOT_FACTOR) + 50

      anime.set(this.$refs.dot, { cx, cy })

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
      await halo.finished
      this.entering = false
    },
    onMouseLeave () {
      if (this.entering) {
        this.entering.pause()
        this.entering = false
      }
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

  &.active .halo {
    animation: 2s linear infinite rotate
  }
}

circle {
  pointer-events: none;
}

.halo {
  transform-origin: 51% 51%;
}

@keyframes rotate {
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
}
</style>
