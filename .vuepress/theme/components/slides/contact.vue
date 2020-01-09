<template>
<slide :centered="false" id="contact" primary>
  <div class="wrapper">
    <h3>Don't be a stranger</h3>
    <p><a href="mailto:sam@samgarson.com">sam@samgarson.com</a></p>
    <p><a href="https://twitter.com/samtgarson">@samgarson</a></p>
      <div v-if="checkin" class="checkin">
        <p>
          <MapPinIcon size="1x"/>
          Last seen at
          <a :href="checkin.url">
            {{ checkin.place }}
          </a>
        </p>
      </div>
    </p>
  </div>
</slide>
</template>

<script>
import Slide from '../slide.vue'
import { get } from 'axios'
import { MapPinIcon } from 'vue-feather-icons'

export default {
  name: 'Contact',
  components: { Slide, MapPinIcon },
  provide: {
    title: 'Get in touch'
  },
  data () { return { checkin: null } },
  async mounted () {
    try {
      const { data } = await get('/api/where')
      this.checkin = data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/vars';

.wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

h3 {
  @include title($stroke: true, $shadow: true);
  @include stretch;
  font-size: 1.2em;
  margin-bottom: $padding;
}

.checkin {
  margin-top: $padding * 2;
}

.feather-map-pin {
  vertical-align: middle;
}

</style>
