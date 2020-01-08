<template>
  <transition-group name="rise" tag="p" class="repeat-text" :class="fill">
    <span class="text" :key="i" :class="classForItem(i)" v-for="i in number">
      {{ text }}
    </span>
  </transition-group>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    fill: { type: String, default: 'left' }
  },
  data () { return { number: 0 } },
  mounted () { this.number = 7 },
  methods: {
    classForItem (i) {
      return { center: i === Math.ceil(this.number / 2) }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';

p {
  margin: 0;
  white-space: nowrap;
  overflow-x: hidden;

  //@for $i from 0 through 5 {
  //  &:nth-child(#{$i + 1}) {
  //    @include rise($delay: $i * 0.5s, $stagger: 0.01s, $duration: .8s);
  //  }
  //}

  &.left {
    @include stretch($align: 'left');
  }

  &.center {
    @include stretch($align: 'center');
  }
}

.text {
  @include title;
  font-size: 2em;
  flex-shrink: 0;
  margin-right: $padding / 4;
  display: inline-block;

  @include small {
    font-size: 1.4em;
  }

  .repeat-text.left &:first-child,
  .repeat-text.center &.center {
    @include title($stroke: false, $shadow: true);
    font-size: 2em;
    @include small {
      font-size: 1.4em;
    }
  }
}
</style>

