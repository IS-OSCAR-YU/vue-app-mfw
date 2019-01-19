import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

let routes = [
    { path: '*', component: Home }
];

let router = new Router({ routes });

export default router;
