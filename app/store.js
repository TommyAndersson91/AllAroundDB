import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
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
<<<<<<< HEAD
      console.log("dsdsdsdsdsadsdsddsdss")
    }
  },
  actions: {
=======
      console.log("dddsdsdsdsdsdsdsdsdss")
    },
    setUrl (state, data) {
      state.url = data;
      console.log(data);
var moment = require('moment');
moment().format();
>>>>>>> 82d38e7c3426be14a15f877fccbf2d8a4fa741e0

    }
  }
 
   



});

