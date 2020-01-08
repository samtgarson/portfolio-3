import { VueReCaptcha } from 'vue-recaptcha-v3'

export default ({Vue}) => {
  if (typeof window === 'undefined') return

  // RAF polyfill: https://gist.github.com/joyrexus/7304146
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      (callback => window.setTimeout(callback, 1000 / 60))
  })()

  // Init Recaptcha
  const {recaptchaSiteKey: siteKey} = {}
  Vue.use(VueReCaptcha, {
    siteKey,
    loaderOptions: {
      autoHideBadge: true
    }
  })
}
