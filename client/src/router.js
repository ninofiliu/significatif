import Vue from 'vue';
import VueRouter from 'vue-router';
import Archives from './views/archives/Archives.vue';
import Contact from './views/contact/Contact.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';
import Humans from './views/photos/Humans.vue';
import Photos from './views/photos/Photos.vue';
import OcularPleasure from './views/photos/OcularPleasure.vue';
import VousEtesDesAnimaux from './views/photos/VousEtesDesAnimaux.vue';
import RideShootRepeat from './views/photos/RideShootRepeat.vue';
import PedalToTheMetal from './views/photos/PedalToTheMetal.vue';

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
    { path: '/photos/ocular-pleasure', component: OcularPleasure },
    { path: '/photos/vous-etes-des-animaux', component: VousEtesDesAnimaux },
    { path: '/photos/ride-shoot-repeat', component: RideShootRepeat },
    { path: '/photos/pedal-to-the-metal', component: PedalToTheMetal },
    { path: '*', redirect: '/' },
  ],
});

export default router;
