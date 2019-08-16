import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';
import router from './router/index'

Vue.prototype.$router = router

Vue.registerElement("VideoPlayer", () => require("../node_modules/nativescript-videoplayer").Video)
Vue.registerElement('YoutubePlayer', () => require('../node_modules/nativescript-youtubeplayer').YoutubePlayer)

// var observable = require("data/observable");
// var viewmodel = new observable.Observable({});

// function pageLoaded(args) {
//   var page = args.object;
//
//   viewmodel.set("htmlString", '<iframe width="100%" height="285" src="https://www.youtube.com/embed/scGRfqV95Xw"frameborder="0"></iframe>');
//
//   page.bindingContext = viewmodel;
// }
// exports.pageLoaded = pageLoaded;

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
