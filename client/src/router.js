import Vue from 'vue';
import VueRouter from 'vue-router';
import ArchitectureSilence from './views/photos/ArchitectureSilence.vue';
import Archives from './views/archives/Archives.vue';
import Contact from './views/contact/Contact.vue';
import CrossTheBorders from './views/photos/CrossTheBorders.vue';
import Home from './views/home/Home.vue';
import Manifesto from './views/manifesto/Manifesto.vue';
import PedalToTheMetal from './views/photos/PedalToTheMetal.vue';
import PhotoSeduction from './views/photos/PhotoSeduction.vue';
import Photos from './views/photos/Photos.vue';
import TasteOfFarniente from './views/photos/TasteOfFarniente.vue';
import VousEtesDesAnimaux from './views/photos/VousEtesDesAnimaux.vue';

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
    { path: '/photos/architecture-silence', component: ArchitectureSilence },
    { path: '/photos/cross-the-borders', component: CrossTheBorders },
    { path: '/photos/pedal-to-the-metal', component: PedalToTheMetal },
    { path: '/photos/photo-seduction', component: PhotoSeduction },
    { path: '/photos/taste-of-farniente', component: TasteOfFarniente },
    { path: '/photos/vous-etes-des-animaux', component: VousEtesDesAnimaux },
    { path: '*', redirect: '/' },
  ],
});

export default router;
