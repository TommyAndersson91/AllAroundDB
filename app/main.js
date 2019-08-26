import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';
import router from './router/index'

Vue.registerElement('CardView', () => require('nativescript-cardview').CardView)

 Vue.registerElement('YoutubePlayer', () => require('nativescript-youtubeplayer').YoutubePlayer)

Vue.prototype.$router = router



Vue.directive('show', {
	inserted: function (el, attr) {
		el.setAttribute("visibility", attr.value ? "visible" : "collapsed");
	},
	update: function (el, attr) {
		el.setAttribute("visibility", attr.value ? "visible" : "collapsed");
	}
});

// Vue.registerElement('YoutubePlayer', () => require('../node_modules/nativescript-youtubeplayer').YoutubePlayer)

Vue.prototype.$goto = function(to, options) {
  this.$navigateTo(this.$router[to], options)
}

import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')




new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
