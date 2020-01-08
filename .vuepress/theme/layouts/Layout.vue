<template>
  <div
    class="theme-container"
    :class="pageClasses"
  >
    <Home v-if="$route.path === '/'"/>

    <div v-else>
      <slot
        name="page-top"
        #top
      />
      <slot
        name="page-bottom"
        #bottom
      />
    </div>
  </div>
</template>

<script>
import Home from '@theme/components/home'

export default {
  components: { Home },

  computed: {
    pageClasses () {
      const userdivClass = this.$page.frontmatter.pageClass
      return [
        userdivClass
      ]
    }
  },
}
</script>

<style lang="scss">
@import 'modern-normalize';
@import '../assets/base';
</style>
