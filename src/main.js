import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Paginate from 'vuejs-paginate'
//import VueAxios from 'vue-axios'
//import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
