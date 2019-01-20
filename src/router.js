import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Demo from './views/Demo.vue'

Vue.use(Router);

let routes = [
    { path: '/demo/', component:  Demo },
    { path: '*', component: Home }
];

let router = new Router({ routes });

export default router;
