import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './views/about/About.vue';
import Archives from './views/archives/Archives.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';
import Photos from './views/photos/Photos.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/archives', component: Archives },
    { path: '/manifesto', component: Manifesto },
    { path: '/photos', component: Photos },
    { path: '*', redirect: '/' },
  ],
});

export default router;
