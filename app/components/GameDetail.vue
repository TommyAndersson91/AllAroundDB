
<template>
<Page>
<StackLayout backgroundColor="#3c495e">
  
  <Label :text="this.$store.state.gameDetails.name" height="50" backgroundColor="#43b883" id="gameName"/>
  <Image v-bind:src="this.$store.state.gameDetails.IGDB_URL+this.$store.state.gameDetails.coverUrl+ '.jpg'" height="200" stretch="aspectFit"/>
  <Label id="gameRating" :text="'Gamerating: ' + this.$store.state.gameDetails.aggregated_rating + '/100'" height="50" backgroundColor="#1c6b48"/>
  <!-- <YoutubePlayer :src="$store.state.gameDetails.gameVideo" apiKey="AIzaSyBbZ72JT7o6a4jWQhXFOxSdAGls6GuQsxI" /> -->
      <!-- apiKey="AIzaSyBbZ72JT7o6a4jWQhXFOxSdAGls6GuQsxI" -->
      <WebView :src="'https://www.youtube.com/watch?v=' + $store.state.gameDetails.gameVideo" />
</StackLayout>
     </Page>   
</template>

<script>

import Vuex from 'vuex';

    export default {
      created () {
     this.$store.commit('destroyYoutube')
     this.writeGenres()
     console.log(this.gameGenres);
     
      },
      mounted() {
     this.$store.commit('destroyYoutube')
      },
      updated() {
     this.$store.commit('destroyYoutube')
      },
      data() {
        return {
        
        genresArray: this.$store.state.gameDetails.genres,
        gameGenres: null,
        }
      },
      methods: {
       writeGenres() {
        this.genresArray.forEach(element => {
            this.gameGenres += ' ' + element
        });
       }

      }


     }
</script>

<style scoped>

#gameName {
    font-size: 20;
    text-align: center;
}
#gameRating {
  font-size: 20;
  color: black;
  font-weight: bold;
}

</style>