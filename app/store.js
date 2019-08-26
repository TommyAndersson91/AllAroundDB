import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    url:"",
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
    }
  },
  mutations: {
    logs() {
      console.log("133ee665576623");
      
    },
    setUrl (state, data) {
      state.url = data;
      console.log(data);
    }
  }
})