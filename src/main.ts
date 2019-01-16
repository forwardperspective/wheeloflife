import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')