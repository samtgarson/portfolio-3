<template>
  <transition>
    <div v-if="data" class="checkin">
      <p class="place"><map-pin /> {{ data.place }}</p>
      <p class="time">({{ data.createdAt | timeago }})</p>
    </div>
  </transition>
</template>

<script>
import fetch from 'unfetch'
import { ago } from 'time-ago'
import MapPin from './icons/map-pin'

export default {
  components: { MapPin },
  data () {
    return { data: false }
  },
  async mounted () {
    try {
      const response = await fetch('/api/where')
      if (!response || !response.ok) return
      this.data = await response.json()
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.error(e)
    }
  },
  filters: {
    timeago (s) {
      return ago(s)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkin {
  width: 100%;
  font-size: 14px;

  @include not-mobile {
    white-space: nowrap;

    p {
      display: inline;
      margin-right: 5px;
    }
  }
}

p {
  white-space: nowrap;
  margin: 0 0 5px;
  display: block;
}

.time {
  opacity: .5;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s, transform .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
