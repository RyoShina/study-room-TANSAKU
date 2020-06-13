import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API,
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})
Vue.config.productionTip = false

console.log(process.env)

new Vue({
  router,
  store,
  vuetify,
  VueHead,
  render: (h) => h(App)
}).$mount('#app')
