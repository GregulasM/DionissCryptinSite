import './assets/main.css'

import { createApp } from 'vue';

import { MotionPlugin } from '@vueuse/motion'


import App from './App.vue'
import router from './router'

import VueCarousel from '@chenfengyuan/vue-carousel';


const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.component(VueCarousel.name, VueCarousel);

app.mount('#app')
