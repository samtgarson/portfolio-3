<template>
  <div class="grid">
    <div class="name">
      <h1>Sam Garson</h1>
    </div>
    <dot v-for="i in 10" :key="i" />
    <div class="desc">
      <p>
        <span>Product management</span>
        <span>Tech Leadership</span>
        <span>Digital Strategy</span>
        <a href="mailto:sam@samgarson.com">Get in touch</a>
      </p>
    </div>
  </div>
</template>

<script>
import Dot from './dot'

export default {
  components: { Dot }
}
</script>

<style lang="scss" scoped>
.grid {
  margin: 20vh auto 0;
  width: 95vw;
  height: 60vh;
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr 1fr;
}

.name {
  position: relative;

  h1 {
    position: absolute;
    margin: -5px 0 0 -5px;
    left: 50%;
    top: 50%;
    text-align: left;
    line-height: 1;
  }
}

.desc {
  position: relative;

  p {
    position: absolute;
    margin: 0 -5px -5px 0;
    right: 50%;
    bottom: 50%;
    text-align: right;
    // line-height: 1;
    font-size: 14px;
  }

  span, a {
    display: block;
  }

  a {
    color: white;
    text-decoration: underline;
    margin-top: 5px;
  }
}

@include mobile {
  .grid {
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  }

  .dot-wrapper:nth-child(7) ~ .dot-wrapper {
    display: none;
  }

  .desc {
    grid-column-end: span 2;

    p {
      right: 25%;
    }
  }
}
</style>
