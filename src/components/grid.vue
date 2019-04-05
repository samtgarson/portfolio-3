<template>
  <div class="grid">
    <div
      class="name"
      @mouseenter="activate('first')"
      @mouseleave="deactivate('first')"
    >
      <h1>Sam Garson</h1>
    </div>
    <dot :key="0" :active="!!active" :i="0"/>
    <dot :key="1" :active="!!active" :i="1"/>
    <div class="links">
      <p>
        <a
          href="https://github.com/samtgarson"
          @mouseenter="activate(2)"
          @mouseleave="deactivate(2)"
        >Code <external-arrow /></a>
        <a
          href="https://twitter.com/samtgarson"
          @mouseenter="activate(2)"
          @mouseleave="deactivate(2)"
        >Comments <external-arrow /></a>
        <a
          href="https://instagram.com/samtgarson"
          @mouseenter="activate(2)"
          @mouseleave="deactivate(2)"
        >Pictures <external-arrow /></a>
      </p>
    </div>
    <dot v-for="i in 8" :key="i + 2" :active="!!active" :i="i"/>
    <div class="desc">
      <p>
        <span>Product management</span>
        <span>Tech Culture</span>
        <span>Digital Strategy</span>
        <a
          href="mailto:sam@samgarson.com"
          @mouseenter="activate('last')"
          @mouseleave="deactivate('last')"
        >Get in touch <external-arrow /></a>
      </p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import Dot from './dot'
import ExternalArrow from './external-arrow'
import { LARGE_HALO_RADIUS } from '@/assets/constants'

export default {
  components: { Dot, ExternalArrow },
  data () {
    return {
      active: false,
      activating: false,
      deactivating: false
    }
  },
  methods: {
    activate (from = 'first') {
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

.desc,
.links {
  position: relative;

  p {
    position: absolute;
    font-size: 14px;
  }

  span, a {
    display: block;

    &:first-child {
      margin-top: 0;
    }
  }

  a {
    margin-top: 5px;
  }
}

.desc p {
  margin: 0 -5px -5px 0;
  right: 50%;
  bottom: 50%;
  text-align: right;
}

.links p {
  text-align: left;
  left: 50%;
  top: 50%;
  margin: -5px 0 0 -5px;
}

@include not-mobile {
  .dot-wrapper:nth-child(2) {
    display: none;
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

  .links {
    p {
      white-space: nowrap;
    }
  }
}
</style>
