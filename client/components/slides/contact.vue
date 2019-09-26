<template>
  <slide>
    <p>Hello!</p>
  </slide>
</template>

<script>
import Slide from '../slide'

export default {
  name: 'Contact',
  components: { Slide },
  provide: {
    title: 'Testing'
  }
}
</script>

<style>

</style>
