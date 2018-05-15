import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'
import router from './router'


new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App },
})
