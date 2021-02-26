import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './media.directive';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.prototype.$s = STATIC_BASE;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
