import Vue from 'vue';
import VueRouter from 'vue-router';
import Archives from './views/archives/Archives.vue';
import Contact from './views/contact/Contact.vue';
import CrossTheBorders from './views/photos/CrossTheBorders.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';
import PhotoSeduction from './views/photos/PhotoSeduction.vue';
import Photos from './views/photos/Photos.vue';
import TasteOfFarniente from './views/photos/TasteOfFarniente.vue';

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
    { path: '/photos/cross-the-borders', component: CrossTheBorders },
    { path: '/photos/taste-of-farniente', component: TasteOfFarniente },
    { path: '/photos/photo-seduction', component: PhotoSeduction },
    { path: '*', redirect: '/' },
  ],
});

export default router;
