import Vue from 'vue'
import VueAnime from 'vue-animejs'
import App from './App'

Vue.use(VueAnime)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
