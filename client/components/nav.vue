<template>
  <nav class="name">
    <div class="main">
      <h1>Sam Garson</h1>
      <h2>{{ title }}</h2>
    </div>
    <div class="secondary">
      <a href="https://github.com/samtgarson">
        <github-icon size="0.9x" />
      </a>
      <a href="https://twitter.com/samtgarson">
        <twitter-icon size="0.9x" />
      </a>
      <a href="https://instagram.com/samtgarson">
        <instagram-icon size="0.9x" />
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

h1,
h2 {
  &::before {
    content: '';
    display: inline-block;
    background-color: $base;
    vertical-align: middle;

    .primary & {
      background-color: $white;
    }
  }
}

$circle-size: .6em;
h1 {
  line-height: 1em;

  &::before {
    margin-right: $circle-size;
    height: $circle-size;
    width: $circle-size;
    border-radius: 50px;
  }
}

h2 {
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;

  &::before {
    height: 1px;
    width: $padding * 3;
    margin: 0 $padding/2;
  }
}

.secondary { 
  svg {
    margin-left: $padding / 2;
  }
}
</style>
