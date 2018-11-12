// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import VueRouter  from 'vue-router'
import home from './components/home'
import headerComp from './components/headerComp'
import profileComp from './components/profileComp'
import adComp from './components/adComp'
import summaryComp from './components/summaryComp'
import './assets/css/global-styles.css';
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
mode: 'history',
base: __dirname,
routes: [
{path: '/', component: home},
{path: '/home', component: home},
{path:"*", redirect:"/home"}  
]
});
/* eslint-disable no-new */
new Vue({
el:"#app",
router,
render: h =>h(App)
// components: {
//   headerComp
// }
})