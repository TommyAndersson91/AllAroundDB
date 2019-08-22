import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myFavoriteYouTubeVideos: [],
    videoIdString: null
  },
  mutations: {
    addFavoriteVideos(state, video) {
      state.myFavoriteYouTubeVideos.push(video)
      console.log("dddsdsdsdsdsadsdsddsdss")
    }
  },
  actions: {

  }
});
