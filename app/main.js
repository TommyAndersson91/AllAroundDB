import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';


import router from './router/index'


Vue.registerElement('YoutubePlayer', () => require('nativescript-youtubeplayer').YoutubePlayer)

Vue.prototype.$router = router

Vue.prototype.$goto = function (to, options) {
  this.$navigateTo(this.$router[to], options)
}




import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')



new Vue({
  render: h => h('frame', [h(App)]),
  store
}).$start()