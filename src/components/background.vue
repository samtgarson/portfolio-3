<template>
  <div class="background" @mousemove="handleMouseMove">
    <bar
      v-for="i in max"
      :index="i"
      :key="i"
      :colours="colours"
      :active="active"
      @activate="i => active = i"
      :peak="peak"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import vars from '@/assets/vars.scss'
import Bar from './bar'

const max = 8

export default {
  components: { Bar },
  data () {
    return {
      vars,
      active: 0,
      max,
      peak: 0.5
    }
  },
  methods: {
    handleMouseMove ({ y }) {
      this.peak = y / window.innerHeight
    }
  },
  computed: {
    colours () {
      return Object.values(this.vars)
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-color: $pink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
</style>
