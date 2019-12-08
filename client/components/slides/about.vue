<template>
<slide id="about">
  <div class="wrapper">
    <img src="@/assets/img/standing.svg" class="illustration"></img>
    <div class="info">
      <h3>Hey there!</h3>
      <p>👋 Sam here. I'm a product focused tech lead in London, with a background in architecture and user experience, currently helping <a href="https://sohohouse.com">Soho House</a> build digital products and a culture and model to support them.</p>
      <p>I'm learning about digital products, the teams that build them and how they change our society; and in particular how to foster a culture in which effective and considered digital work can be done.</p>
      <p>I've been lucky enough to help create digital stuff at all phases of the process—from strategy, transformation and innovation, through user experience and solution architecture down to pixels and code.</p>
      <p>I'm not looking for work right now but I'm always eager to have conversations (sometimes arguments) about this stuff, preferably over coffee or whiskey—my <a href="#contact">inbox is open</a> ✌️</p>
    </div>
  </div>
</slide>
</template>

<script>
import Slide from '../slide'

export default {
  name: 'About',
  components: { Slide },
  provide: {
    title: 'How\'s it going?'
  }
}
</script>

<style scoped lang="scss">
h3 {
  @include title;
  @include stretch;
}

.wrapper {
  display: flex;
  align-items: center;
}

.illustration {
  flex: 1 1 25%;
  max-height: $slide-height - $padding*2;
  padding: $padding*2 $padding $padding*2 0;

  @include small {
    display: none;
  }
}

.info {
  flex: 2 1 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1em;
}
</style>
