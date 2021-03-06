import Vue from 'vue'
import App from './App'
import ExternalArrow from './components/icons/external-arrow'

Vue.component('ExternalArrow', ExternalArrow)

Vue.config.productionTip = false;

(global || window).$v = new Vue({
  render: h => h(App)
}).$mount('#app')
