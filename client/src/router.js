import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './views/about/About.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/manifesto', component: Manifesto },
    { path: '/about', component: About },
    { path: '*', redirect: '/' },
  ],
});

export default router;
