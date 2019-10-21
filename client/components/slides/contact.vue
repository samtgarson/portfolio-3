<template>
<slide id="contact" primary>
  <h1>Don't be a stranger.</h1>
  <form @submit.stop.prevent="sendForm">
    <input v-model="name" type="text" placeholder="What should I call you" />
    <input v-model="email" type="email" placeholder="Where should I email my reply to" />
    <textarea v-model="text" placeholder="Dear Sam..." />
    <button type="submit">Send it 👉</button>
  </form>
</slide>
</template>

<script>
import Slide from '../slide'
import { post } from 'axios'

export default {
  name: 'Contact',
  components: { Slide },
  provide: {
    title: 'Get in touch'
  },
  data () {
    return { name: '', email: '', text: '' }
  },
  methods: {
    async sendForm () {
      const token = await this.$recaptcha('sendContactForm')
      const { name, email, text } = this
      const result = await post(
        '/api/contact', 
        { name, email, text, token },
        { validateStatus: () => true }
      )
      console.log(result)
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  @include title;
  @include stretch;
}
</style>
