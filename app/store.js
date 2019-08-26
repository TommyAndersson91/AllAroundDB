import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
var moment = require('moment');
moment().format();

export default new Vuex.Store({
  state: {
   gameDetails: {
     name: null, 
     coverUrl: null,
     IGDB_URL: "https://images.igdb.com/igdb/image/upload/t_thumb/",
     releaseDate: null,
     fixedReleaseDate: null,
     aggregated_rating: null,
     gameVideo: null,
     genres: [],

   },
  },
  mutations: {
  hej() {
    console.log("4");
    
  },


  },
  actions: {
   



  }
});
