// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import GoogleAuth from 'vue-google-auth'
import App from './App'
import router from './router'

Vue.use(VueResource)

Vue.use(GoogleAuth, {client_id: '350080120858-73mu6ljske714asujtc926vropcbgcrk.apps.googleusercontent.com'})

Vue.googleAuth().load()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
