<template>
<div class="links" v-on="$listeners">
  <p>
    <a rel="noopener" target="_blank" href="https://github.com/samtgarson">Code <external-arrow /></a>
    <a rel="noopener" target="_blank" href="https://twitter.com/samtgarson">Comments <external-arrow /></a>
    <a rel="noopener" target="_blank" href="https://instagram.com/samtgarson">Pictures <external-arrow /></a>
    <a rel="noopener" target="_blank" href="https://lessons.samgarson.com">Lessons Learned <external-arrow /></a>
  </p>
</div>
</template>

<style lang="scss" scoped>
.links {
  @include grid-text;
}

p {
  text-align: left;
  left: 50%;
  top: 50%;
  margin: -5px 0 0 -5px;
}
</style>
