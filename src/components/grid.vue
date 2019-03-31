<template>
  <div class="grid">
    <div
      class="name"
      @mouseenter="activate('first')"
      @mouseleave="deactivate('first')"
    >
      <h1>Sam Garson</h1>
    </div>
    <dot v-for="i in 10" :key="i" :active="!!active" :i="i"/>
    <div class="desc">
      <p>
        <span>Product management</span>
        <span>Tech Leadership</span>
        <span>Digital Strategy</span>
        <a
          href="mailto:sam@samgarson.com"
          @mouseenter="activate('last')"
          @mouseleave="deactivate('last')"
        >Get in touch</a>
      </p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import Dot from './dot'
import { LARGE_HALO_RADIUS } from '@/assets/constants'

export default {
  components: { Dot },
  data () {
    return {
      active: false,
      activating: false,
      deactivating: false
    }
  },
  methods: {
    activate (from = 'start') {
      this.active = true
      if (this.deactivating) this.deactivating.pause()
      this.activating = anime({
        targets: '.grid .halo',
        r: LARGE_HALO_RADIUS,
        cx: 50,
        cy: 50,
        duration: 1200,
        delay: anime.stagger(80, { grid: [3, 4], from })
      })
    },
    async deactivate (from = 'first') {
      if (this.activating) this.activating.pause()
      this.deactivating = anime({
        targets: '.grid .halo',
        r: 1,
        cx: 50,
        cy: 50,
        easing: 'easeOutExpo',
        duration: 500,
        delay: anime.stagger(40, { grid: [3, 4], from })
      })
      await this.deactivating.finished
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  margin: 20vh auto 0;
  width: 95vw;
  height: 60vh;
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1 1 25%;
    height: percentage(1/3);
  }
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

    & > * {
      flex: 1 1 percentage(1/3);
    }
  }

  .dot-wrapper:nth-child(7) ~ .dot-wrapper {
    display: none;
  }

  .desc {
    flex-basis: percentage(2/3);

    p {
      right: 25%;
    }
  }
}
</style>
