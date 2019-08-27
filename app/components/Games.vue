<!-- Home.vue -->

<template>
   
 
<StackLayout>
<SearchBar hint="Search games" height="60" v-model="searchString" @submit="searchGames" />
   <ListView  for="item in gamesArray" @itemTap="onItemTap" height="500" rowHeight="90">
  <v-template>
      <StackLayout orientation="horizontal"  >

       <Image v-bind:src="IGDB_URL+ (item.cover ? item.cover : cover).image_id + '.jpg'" stretch="aspectFit" /> 
     
     <Label id="gameName" :text="item.name" textWrap="true"/> 
      </StackLayout>
  </v-template>
</ListView> 
</StackLayout>


</template>

<script>

import { log } from 'util';
import GameDetailVue from './GameDetail.vue';
const axios = require('axios');



  export default {
    created() {
	  
	  
	  
    },
    data() {
      return {

        game: null,
        gamesArray: [],
        IGDB_URL: "https://images.igdb.com/igdb/image/upload/t_thumb/",
        API_KEY: "a70001fa0e13c09177c2ccec97ee1a2e",
        cover: {
        image_id: "ajil0prrzlshdomjq3jw"
        },
        searchString: null,
        trolol: "oavMtUWDBTM",
      }
    },
    methods: {
     
      onItemTap(event) {
        console.log(event.item);
    this.$store.state.gameDetails.coverUrl = (event.item.cover ? event.item.cover : this.cover).image_id
    this.$store.state.gameDetails.name = event.item.name
    this.$store.state.gameDetails.aggregated_rating = Math.round(event.item.aggregated_rating)
    this.$store.state.gameDetails.gameVideo = (event.item.videos ? event.item.videos[0].video_id : this.trolol)
    this.$store.state.gameDetails.genres = event.item.genres

   
    console.log(this.$store.state.gameDetails.fixedReleaseDate);
    
     this.$navigateTo(GameDetailVue)
    },

     onSubmit() {
     
    },



    getVideoGames() {
  axios({
  url: "https://api-v3.igdb.com/games",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'user-key': this.API_KEY
  },
  data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
})
  .then(response => {
      console.log(response.data);
      let b = []
      b = response.data.filter(data => data.games_engines == pc)
     
    
       
  })
  .catch(err => {
      console.error(err);
  });
    },

   searchGames() {
       console.log("SÖKSTRÄNGEN ÄR", this.searchString);
  axios({
  url: "https://api-v3.igdb.com/games/",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'user-key': this.API_KEY,
  },
  data: `fields name,cover.image_id,aggregated_rating, videos.video_id, genres.name; search "${this.searchString}";`
 
})
  .then(response => {
       
      this.gamesArray = response.data
     
         
  })
  .catch(err => {
      console.error(err);
  });
   
    }
    }
    }
    


  
</script>


<style scoped>
 /* ActionBar {
   background-color: #56a3f2;
   color: #fff;
 }

 Button {
   background-color: #56a3f2;
   color: #fff;
 } */

 #gameName {
   font-size: 18;
   padding: 0 20;
   text-align: center;
   vertical-align: center;
 }
</style>
