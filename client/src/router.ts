import { createRouter, createWebHistory } from "vue-router";
import Archives from "./views/archives/Archives.vue";
import Contact from "./views/contact/Contact.vue";
import Home from "./views/home/Home.vue";
import Manifesto from "./views/manifesto/Manifesto.vue";
import Humans from "./views/photos/Humans.vue";
import Photos from "./views/photos/Photos.vue";
import OcularPleasure from "./views/photos/OcularPleasure.vue";
import VousEtesDesAnimaux from "./views/photos/VousEtesDesAnimaux.vue";
import RideShootRepeat from "./views/photos/RideShootRepeat.vue";
import PedalToTheMetal from "./views/photos/PedalToTheMetal.vue";
import TasteOfFarniente from "./views/photos/TasteOfFarniente.vue";
import CrossTheBorders from "./views/photos/CrossTheBorders.vue";
import SilentPhotography from "./views/photos/SilentPhotography.vue";
import SelfPortraits from "./views/photos/SelfPortraits.vue";
import { ROUTER_BASE } from "./globals";

const router = createRouter({
  history: createWebHistory(ROUTER_BASE),
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact },
    { path: "/archives", component: Archives },
    { path: "/manifesto", component: Manifesto },
    { path: "/photos", component: Photos },
    { path: "/photos/humans", component: Humans },
    { path: "/photos/ocular-pleasure", component: OcularPleasure },
    { path: "/photos/vous-etes-des-animaux", component: VousEtesDesAnimaux },
    { path: "/photos/ride-shoot-repeat", component: RideShootRepeat },
    { path: "/photos/pedal-to-the-metal", component: PedalToTheMetal },
    { path: "/photos/taste-of-farniente", component: TasteOfFarniente },
    { path: "/photos/cross-the-borders", component: CrossTheBorders },
    { path: "/photos/silent-photography", component: SilentPhotography },
    { path: "/photos/self-portraits", component: SelfPortraits },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

export default router;
