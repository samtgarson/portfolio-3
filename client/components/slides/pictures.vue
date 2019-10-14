<template>
<slide accent id="pictures" v-if="!failed">
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
  </ul>
</slide>
</template>

<script>
import { get } from 'axios'
import Slide from '../slide'

const pictures = Array(6).fill({ loading: true })

export default {
  name: 'Pictures',
  components: { Slide },
  provide: {
    title: 'Pictures'
  },
  data: () => ({ pictures, failed: false }),
  async mounted () {
    try {
      const { data } = await get('/api/insta')
      this.pictures = data.slice(0, 6);
    } catch (e) {
      this.failed = true
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
  background-color: $white;

  &.loading {
  }
}

a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
}
</style>
