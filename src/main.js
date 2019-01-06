// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store/index.js'
import 'vuetify/dist/vuetify.min.css'
import datefilter from './filters/date'
import * as firebase from 'firebase'
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', datefilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCEMKbH577Xt5cRr06ygkYR9yJoNwE0eNw',
      authDomain: 'snap-shots-e9ce1.firebaseapp.com',
      databaseURL: 'https://snap-shots-e9ce1.firebaseio.com',
      projectId: 'snap-shots-e9ce1',
      storageBucket: 'snap-shots-e9ce1.appspot.com'
    })
  }
})
