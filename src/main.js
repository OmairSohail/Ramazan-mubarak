import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css';
import './assets/main.css';


import vueclock from 'vue-digital-clock';
Vue.use(vueclock);


Vue.config.productionTip = false

Vue.component('navbar',require('./components/navBar.vue').default);
Vue.component('FOOTER',require('./components/footer.vue').default);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
