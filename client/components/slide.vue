<template>
  <section class="slide">
    <article>
      <slot />
    </article>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

article {
  width: 100%;
  max-width: 800px;
  padding: 30px;
}
</style>
