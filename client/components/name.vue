<template>
  <nav class="name">
    <h1>Sam Garson</h1>
    <h2>{{ title }}</h2>
  </nav>
</template>

<script>
export default {
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
  display: flex;
  flex-flow: row nowrap;
}

$circle-size: .6em;
h1 {
  line-height: 1em;

  &::before {
    content: '';
    display: inline-block;
    margin-right: $circle-size;
    height: $circle-size;
    width: $circle-size;
    border-radius: 50px;
    background-color: $base;

    .primary & {
      background-color: white;
    }
  }
}

h2 {
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;

  &::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: $padding * 3;
    background-color: $base;
    margin: 0 $padding/2;
    vertical-align: middle;

    .primary & {
      background-color: white;
    }
  }
}
</style>
