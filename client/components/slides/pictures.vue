<template>
<slide pink :centered="false" id="pictures" v-if="!failed">
  <ul class="wrapper">
    <li
      v-for="picture in pictures"
      :key="picture.url"
      :class="{ loading: picture.loading }"
    >
      <a
        v-if="!picture.loading"
        :href="picture.url"
        :style="{ backgroundImage: `url(${picture.src})` }"
        title="picture.location"
        target="_blank"
      ></a>
    </li>
    <li class="more">
      <a href="https://instagram.com/samtgarson">
        See
        <span>More</span>
        pictures
      </a>
    </li>
  </ul>
</slide>
</template>

<script>
import { get } from 'axios'
import Slide from '../slide'
import RepeatText from '../repeat-text'

const pictures = Array(4).fill({ loading: true })

export default {
  name: 'Pictures',
  components: { Slide, RepeatText },
  provide: {
    title: 'Pictures'
  },
  data: () => ({ pictures, failed: false }),
  async mounted () {
    try {
      const { data } = await get('/api/insta')
      this.pictures = data.slice(0, 4);
    } catch (e) {
      this.failed = true
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  max-width: 500px;
}

li {
  list-style-type: none;
  width: 100%;
  margin: 0 auto;
  @include fluid-aspect(1 1, a);

  &:not(:last-child) {
    margin-bottom: $padding;
  }

  &:not(.more) {
    background-color: $white;
  }

  &.more a {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-style: italic;
    text-align: center;

    @include colour using ($text, $_) {
      border: 1px solid $text;

      &:hover span {
        color: $text;
      }
    }

    span {
      @include title($shadow: true);
      @include stretch($align: 'center');
      line-height: 1em;
      margin-bottom: 8px;
    }
  }
}

a {
  display: block;
  background-size: cover;

  img {
    width: 100%;
  }
}
</style>
