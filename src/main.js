import Vue from 'vue'
import App from './App.vue'
import bus from './observer'
Vue.prototype.observer=bus
new Vue({
  el: '#app',
  render: h => h(App)
})
