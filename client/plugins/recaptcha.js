import Vue from 'vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default ({ env }) => {
  const { recaptchaSiteKey: siteKey } = env
  Vue.use(VueReCaptcha, { 
    siteKey,
    loaderOptions: {
      autoHideBadge: true
    }
  })
}
