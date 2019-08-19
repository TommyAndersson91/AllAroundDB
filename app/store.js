import Vue from 'vue';
import Vuex from 'vuex';
import { isNull } from 'util';

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
      writer:null
    }
  },
  mutations: {

  },
  actions: {

  }
});
