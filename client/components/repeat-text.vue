<template>
  <p class="repeat-text" :class="fill">
    <span :class="classForItem(i)" v-for="i in number">{{ text }}</span>
  </p>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    fill: { type: String, default: 'left' },
    number: { type: Number, default: 7 }
  },
  methods: {
    classForItem (i) {
      return { center: i === Math.ceil(number / 2) }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  white-space: nowrap;
  &.left {
    @include stretch($align: 'left');
  }

  &.center {
    @include stretch($align: 'center');
  }
}

span {
  @include title;
  font-size: 2em;
  flex-shrink: 0;
  margin-right: $padding / 4;

  .repeat-text.left &:first-child,
  .repeat-text.center &.center {
    @include colour using ($text, $bg) {
      color: $text;
    }
  }
}
</style>

