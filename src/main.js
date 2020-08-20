import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

const AppVue = new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');

console.log(AppVue);
