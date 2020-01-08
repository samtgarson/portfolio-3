import Vue from 'vue'

export default () => new Vue({
  data: {
    scrolled: false,
    resized: false,
    running: true,
    data: {}
  },
  methods: {
    start(base) {
      base.addEventListener('resize', this.resize)
      base.addEventListener('scroll', this.scroll)

      this.resize()

      this.refresh(base)

      this.$once('hook:beforeDestroy', () => {
        this.running = false
        base.removeEventListener('resize', this.resize)
        base.removeEventListener('scroll', this.scroll)
      })
    },
    refresh(base) {
      if (this.running) base.requestAnimFrame(() => this.refresh(base))

      if (this.resized) {
        this.$emit('resized')
        this.resized = false
      }

      if (this.scrolled) {
        this.$emit('scrolled')
        this.scrolled = false
      }
    },
    stop() { this.$destroy() },
    resize() { this.resized = true },
    scroll() { this.scrolled = true },
    setData(key, val) {
      this.data = { ...this.data, [key]: val }
    }
  }
})
