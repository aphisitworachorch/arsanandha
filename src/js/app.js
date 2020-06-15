import * as axios from "axios";

window.Vue = require('vue');
import es6Promise from "es6-promise"
es6Promise.polyfill()
import VueTilt from 'vue-tilt.js'

/** VUIKIT COMPONENTS **/
// later in your source files
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import VueRouter from 'vue-router'
import IndexT from "./views/IndexT";
import About from "./views/About";
import Main from "./views/Main";
import IndexTwentyFour from "./views/twentyfour/IndexTwentyFour";
import IT20 from "./views/profile/IT20";
import Katakorn from "./views/profile/Katakorn";
import StudentCouncil from "./views/profile/StudentCouncil";
import Suranivet7 from "./views/profile/Suranivet7";
import ForgiveWorapat from "./views/tell/ForgiveWorapat";
import ComputerQueue from "./views/computer/ComputerQueue";
import VueSweetalert2 from 'vue-sweetalert2';

import '@vuikit/theme'
import VueAxios from "vue-axios";
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(VueRouter)
Vue.use(VueTilt)
Vue.use(VueSweetalert2);

Vue.prototype.$http = axios

/** END VUIKIT COMPONENTS **/

/** ROUTER **/
const Routes = [
    { path: '/', component: IndexT },
    { path: '/about', component: About },
    { path: '/twentyfour', component: IndexTwentyFour },
    { path: '/profile/it20', component: IT20 },
    { path: '/profile/ktk', component: Katakorn },
    { path: '/profile/sutsc', component: StudentCouncil },
    { path: '/profile/s7', component: Suranivet7 },
    { path: '/computer-queue', component: ComputerQueue },
    { path: '/tell/def337a6a7f2207fc171b1277441c787', component: ForgiveWorapat }
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

