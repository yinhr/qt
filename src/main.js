import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
//import VueAxios from 'vue-axios'
//import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
