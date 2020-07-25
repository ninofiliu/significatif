import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Home from './views/home/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (store.state.cover) {
    store.commit('setCoverCenter');
    await new Promise((r) => setTimeout(r, 500));
  }
  if (to.path === '/') {
    store.commit('setCoverRight');
  } else {
    store.commit('setCoverLeft');
  }
  next();
});

export default router;
