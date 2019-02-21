import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Note from './views/Note'
import Detail from './views/Detail'

Vue.use(Router);

let routes = [
    { path: '/note/:id', component: Note },
    { path: '/detail/:id', component: Detail },
    { path: '*', component: Home }
];

let router = new Router({ routes });

export default router;
