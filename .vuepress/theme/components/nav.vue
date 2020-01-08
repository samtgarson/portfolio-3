<template>
  <nav class="name">
    <div class="main">
      <h1>Sam Garson</h1>
      <h2>{{ title }}</h2>
    </div>
    <div class="secondary">
      <a href="https://github.com/samtgarson">
        <github-icon size="1x" />
      </a>
      <a href="https://twitter.com/samtgarson">
        <twitter-icon size="1x" />
      </a>
      <a href="https://instagram.com/samtgarson">
        <instagram-icon size="1x" />
      </a>
    </div>
  </nav>
</template>

<script>
import { GithubIcon, InstagramIcon, TwitterIcon } from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    InstagramIcon,
    TwitterIcon
  },
  inject: {
    title: { default: 'Hey there' }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/vars';

nav {
  position: fixed;
  top: $padding;
  left: $padding;
  right: $padding;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.main {
  display: flex;
  flex-flow: row nowrap;
}

h1 {
  line-height: 1em;
  @include dot($circle-size: .9rem, $position: 'before') using ($circle-size) {
    margin-right: $circle-size;
  }
}

h2 {
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;
  @include line;

  @include small {
    display: none;
  }
}

.secondary {
  svg {
    margin-left: $padding / 2;
  }

  @include small {
    display: flex;
    flex-direction: column;
  }
}
</style>
