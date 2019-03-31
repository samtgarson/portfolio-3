import Vue from 'vue'
// import VueAnime from 'vue-animejs'
import App from './App'

// Vue.use(VueAnime)

Vue.config.productionTip = false;

(global || window).$v = new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
