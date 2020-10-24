import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.prototype.$s = STATIC_BASE;

const url = new URL(window.location);
const features = {
  navBarOpacity: url.searchParams.has('nav-bar-opacity') ? +url.searchParams.get('nav-bar-opacity') : 0,
};
Vue.prototype.$features = features;
window.features = features;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
