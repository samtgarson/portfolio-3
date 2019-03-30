<template>
  <div @mouseenter="activate" :style="style" class="bar" />
</template>

<script>
export default {
  data () {
    return { fromColour: this.colours[0], toColour: this.colours[1] }
  },
  props: ['index', 'peak', 'active', 'colours'],
  methods: {
    activate () {
      this.$emit('activate', this.index)
    }
  },
  computed: {
    fromStop () {
      const stop = (this.peak - 0.5) / 2
      return stop * 100
    },
    toStop () {
      const stop = 1 - ((0.5 - this.peak) / 2)
      return stop * 100
    },
    style () {
      const bi = [
        `${this.fromColour} ${this.fromStop}%`,
        `${this.toColour} ${this.toStop}%`
      ].join(', ')

      return {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  height: 100%;
  flex: 1 1 auto;

  &:not(:first-child) {
    border-left: 1px solid rgba(white, .5);
  }
}
</style>
