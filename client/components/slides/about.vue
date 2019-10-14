<template>
<slide id="about">
  <div class="wrapper">
    <div class="illustration">
      <img src="@/assets/img/standing.svg"></img>
    </div>
    <div class="info">
      <h3>Hey there</h3>
      <p>👋 Sam here. I'm a product focused tech lead in London, currently helping <a href="https://sohohouse.com">Soho House</a> build digital products and a culture and model to support them.</p>
      <p>I'm learning about digital products, the teams that build them and how they change our society; and in particular how to create an environment in which effective and considered digital work can be done.</p>
      <p>I've been lucky enough to experience product development at all levels—from strategy, transformation and innovation, through user experience and architecture down to pixels and code.</p>
      <p>I'm not looking for work right now but I'm always eager to have conversations (often arguments) about these subjects and others, preferably over coffee or whiskey—my <a href="#">inbox is open</a> ✌️</p>
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
  font-size: 3rem;
  text-transform: uppercase;
  transform-origin: 0 50%;
  transform: scaleX(1.2);
  @include text-stroke;
}

.wrapper {
  display: flex;
  align-items: center;
  @debug 'here';
}

.illustration {
  flex: 1 1 33%;
  max-height: $slide-height;
  padding: $padding*2 $padding*2 $padding*2 0;

  img {
    height: 100%;
    width: 100%;
  }

  @include small {
    display: none;
  }
}

.info {
  flex: 2 0 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
