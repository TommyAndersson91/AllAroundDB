import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    url: "",
    bookDetails:{
      author: null,
      cover: null,
      description: null,
      publisher: null,
      ranking: null,
      rankingLastWeek: null,
      rankingNrOfWeeks: null,
      title: null,
      url:""
    },
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

    },

    myFavoriteYouTubeVideos: [],
    videoIdString: null
  },
  mutations: {
    addFavoriteVideos(state, video) {
      state.myFavoriteYouTubeVideos.push(video)
      console.log("dddsdsdsdsdsadsdsddsdss")
    },
    setUrl (state, data) {
      state.url = data;
      console.log(data);

  }
  },
   


});

