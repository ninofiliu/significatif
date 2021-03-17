import Vue from 'vue';
import VueRouter from 'vue-router';
import Archives from './views/archives/Archives.vue';
import Contact from './views/contact/Contact.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';
import Humans from './views/photos/Humans.vue';
import Photos from './views/photos/Photos.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: ROUTER_BASE,
  routes: [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/archives', component: Archives },
    { path: '/manifesto', component: Manifesto },
    { path: '/photos', component: Photos },
    { path: '/photos/humans', component: Humans },
    { path: '*', redirect: '/' },
  ],
});

export default router;
