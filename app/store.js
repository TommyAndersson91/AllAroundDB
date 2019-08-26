import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieDetails:{
      title:null,
      year:null,
      rated:null,
      releaseDate:null,
      runTime: null,
      genre:null,
      director:null,
      actors:null,
      plot:null,
      poster:null,
      imdbRatings:null,
      metaScore:null,
      writer:null,
      rottenTomatoesRating:null,
      loadingIndicator:true

    }
  },
  mutations: {
    bla(){
      console.log("hfhsh");
      
    }

  },
  actions: {

  }
});
