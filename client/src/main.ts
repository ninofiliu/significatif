import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import media from './media.directive';
import './styles/index.scss';

const app = createApp(App)
app.use(router)
app.use(store)
app.directive('media', media)
app.mount('#app')
