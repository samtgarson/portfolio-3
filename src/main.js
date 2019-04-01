import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

(global || window).$v = new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
