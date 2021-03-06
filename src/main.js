import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-pro/css/all.css'
import Toasted from 'vue-toasted'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(require('vue-moment'))
Vue.use(VueLazyload)
Vue.use(Toasted, {
  router
})
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
