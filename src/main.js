import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
