<template>
  <div class="grid">
    <div class="name">
      <div>
        <h1 @mouseenter="activate('first')" @mouseleave="deactivate('first')">
          Sam Garson
        </h1>
        <checkin />
      </div>
    </div>
    <dot :key="0" :active="!!active" :i="0"/>
    <dot :key="1" :active="!!active" :i="1"/>
    <Links @mouseenter="activate(2)" @mouseleave="deactivate(2)" />
    <dot v-for="i in 8" :key="i + 2" :active="!!active" :i="i"/>
    <Brief @mouseenter="activate('last')" @mouseleave="deactivate('last')" />
  </div>
</template>

<script>
import anime from 'animejs'
import Dot from './dot'
import Brief from './desc'
import Links from './links'
import Checkin from './checkin'
import { LARGE_HALO_RADIUS } from '../assets/constants'

export default {
  components: { Dot, Brief, Links, Checkin },
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
}

$children: '.name, .desc, .links, .dot-wrapper';
#{$children} {
  flex: 1 1 25%;
  height: percentage(1/3);
}

.name {
  position: relative;
  z-index: 1;

  & > div {
    position: absolute;
    margin: -5px 0 0 -5px;
    left: 50%;
    top: 50%;
    width: 50%;
    text-align: left;
    line-height: 1;
  }

  h1 {
    margin: 0 0 20px;
  }
}

@include not-mobile {
  .dot-wrapper:nth-child(2) {
    display: none;
  }
}

@include mobile {
  .grid {
    height: 110vh;
    width: 100vw;
    margin: -5vh auto;
  }

  #{$children} {
    flex: 1 1 percentage(1/3);
  }

  .dot-wrapper:nth-child(7) ~ .dot-wrapper {
    display: none;
  }
}
</style>
