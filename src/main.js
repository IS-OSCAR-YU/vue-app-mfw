import Vue from 'vue'
import { Swipe, SwipeItem, InfiniteScroll } from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(InfiniteScroll);

// Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    mounted() {
        document.getElementsByTagName('html')[0].style.fontSize = document.body.clientWidth / 10 + 'px';
    },
    render: h => h(App)
}).$mount('#app')
