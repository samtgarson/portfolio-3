<template>
<slide :centered="false" id="contact" primary>
  <h1>Don't be a stranger!</h1>
  <div v-if="error">
    <p>{{ error }}</p>
    <button type="button" @click="error = false">Try again</button>
  </div>
  <form @submit.stop.prevent="sendForm" @input="sent = false" v-else>
    <input id="contact-name" v-model="name" type="text" placeholder="Type your name." />
    <input id="contact-email" v-model="email" type="email" placeholder="Type your email." />
    <textarea id="contact-text" v-model="text" placeholder="Type your message." />
    <button disabled v-if="sent">Thanks for your message! 🙌</button>
    <button v-else type="submit">Send it 👉</button>
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
    return {
      name: '',
      email: '',
      text: '',
      error: null,
      sent: false
    }
  },
  methods: {
    async sendForm () {
      this.error = null
      const token = await this.$recaptcha('sendContactForm')
      const { name, email, text } = this
      try {
        const result = await post(
          '/api/contact',
          { name, email, text, token }
        )
        console.log(result)
        this.reset()
        this.sent = true
      } catch (e) {
        console.log(e)
        this.error = 'Something went wrong...'
      }
    },
    reset () {
      this.name = ''
      this.email = ''
      this.text = ''
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  @include title($stroke: false);
  @include stretch;
  margin-bottom: $padding;
}

input,
textarea,
button {
  display: block;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  outline: none;
  font-weight: inherit;
  line-height: inherit;
  font-size: 3rem !important;

  @include colour using ($text, $_) {
    color: $text;
  }
}

input,
textarea {
  width: 100%;
  border-bottom: 1px solid white;
  margin-bottom: $padding;

  &::placeholder,
  &::-webkit-input-placeholder {
    @include title($shadow: true);
  }
}

textarea {
  height: 200px;
}

button {
  @include dot($position: 'before', $circle-size: 0.4em) using ($circle-size) {
    margin-right: $padding;
  }
}
</style>
