<template>
<div class="desc" v-on="$listeners">
  <p>
    <span>Product management</span>
    <span>Tech Culture</span>
    <span>Digital Strategy</span>
    <a href="mailto:sam@samgarson.com">Get in touch <external-arrow /></a>
    <a href="/sam-garson-cv.pdf" class="resume" target="_blank">Résumé <external-arrow /></a>
  </p>
</div>
</template>

<style lang="scss" scoped>
.desc {
  @include grid-text;
}

p {
  margin: 0 -5px -5px 0;
  right: 50%;
  bottom: 50%;
  text-align: right;
}

.resume svg {
  transform: rotate(135deg);
  transform-origin: 50% 60%;
}

@include mobile {
  div.desc {
    flex-basis: percentage(2/3);

    p {
      right: 25%;
    }
  }
}
</style>
