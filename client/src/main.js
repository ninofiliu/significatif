import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.prototype.$s = STATIC_BASE;

/* eslint-disable no-param-reassign */
Vue.directive('media', {
  inserted(el, { value }) {
    const src = STATIC_BASE + value;
    const smallSrc = src.replace(/\.[^.]*$/, ($0) => `.small${$0}`);
    el.src = smallSrc;
    const img = new Image();
    img.src = src;
    img.addEventListener('load', () => {
      el.src = src;
    });
  },
});
/* eslint-enable no-param-reassign */

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
