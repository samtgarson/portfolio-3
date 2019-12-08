<template>
<slide id="about" white>
  <div class="wrapper">
    <h3>Works / Thoughts</h3>
    <p></p>
  </div>
</slide>
</template>

<script>
import Slide from '../slide'

export default {
  name: 'Things',
  components: { Slide },
  provide: {
    title: 'Things I\'ve made'
  }
}
</script>

<style scoped lang="scss">
h3 {
  @include title;
  @include stretch;
}

.wrapper {
  display: flex;
  align-items: center;
  column-count: 3;
  column-gap: $padding;

  @include small {
    flex-direction: column;
  }
}
</style>
