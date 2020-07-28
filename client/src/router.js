import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './views/about/About.vue';
import Archive from './views/archive/Archive.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/archive', component: Archive },
    { path: '/manifesto', component: Manifesto },
    { path: '*', redirect: '/' },
  ],
});

export default router;
