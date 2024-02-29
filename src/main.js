// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './Page/Home.vue';
import About from './Page/About.vue';
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name:"home",
        components:Home
    },
    {
        path:"/about",
        name:"about",
        components:About
    }
];

const router = new VueRouter({
    mode:"history",
    routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app')
