<template>
  <p class="repeat-text" :class="{ odd }">
    <span v-for="i in 7">{{ text }}</span>
  </p>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    odd: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  white-space: nowrap;
  @include stretch;
}

span {
  @include title;
  font-size: 2em;
  flex-shrink: 0;
  margin-right: $padding / 4;

  &:first-child {
    color: $white;
  }
}
</style>

