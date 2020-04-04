window.Vue = require('vue');

/** VUIKIT COMPONENTS **/
// later in your source files
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import VueRouter from 'vue-router'
import IndexT from "./views/IndexT";
import About from "./views/About";
import Main from "./views/Main";

import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VueRouter)
/** END VUIKIT COMPONENTS **/

/** ROUTER **/
const Routes = [
    { path: '/', component: IndexT },
    { path: '/about', component: About }
];
const router = new VueRouter({
    routes: Routes,
    mode: 'hash'
});
/** ROUTER **/

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

new Vue({
    el: '#app',
    router: router,
    render: h => h (Main)
});

