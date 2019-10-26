<template>
<slide bright id="pictures" v-if="!failed">
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
        :title="picture.location"
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

const pictures = Array(5).fill({ loading: true })

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
      this.pictures = data.slice(0, 5);
    } catch (e) {
      this.failed = true
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-auto-rows: 1fr;
  padding: 0;
  margin: 0;
  grid-column-gap: $padding / 2;
  grid-row-gap: $padding / 2;

  @include small {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }


  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  } 

  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
}

li {
  list-style-type: none;
  position: relative;

  &:not(.more) {
    background-color: $white;
  }

  &.loading {
  }

  &.more a {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-style: italic;

    @include colour using ($text, $_) {
      border: 1px solid $text;
    }

    span {
      @include title;
      @include stretch($align: 'center');
      line-height: 1em;
      margin-bottom: 8px;
    }

    &:hover span {
      color: $dark;
    }
  }
}

a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  text-decoration: none;
}
</style>
