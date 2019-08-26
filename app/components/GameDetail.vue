
<template>
<Page>
<StackLayout backgroundColor="#3c495e">
  <Label :text="this.$store.state.gameDetails.name" height="50" backgroundColor="#43b883" id="gameName"/>
  <Image v-bind:src="this.$store.state.gameDetails.IGDB_URL+this.$store.state.gameDetails.coverUrl+ '.jpg'" height="200" stretch="aspectFit"/>
  <Label id="gameRating" :text="'Gamerating: ' + this.$store.state.gameDetails.aggregated_rating + '/100'" height="50" backgroundColor="#1c6b48"/>
  <!-- <Label id="gameGenres" :text="this.gameGenres" height="50"> -->
    <ListView>
   <YoutubePlayer :src="this.$store.state.gameDetails.gameVideo" apiKey="AIzaSyBbZ72JT7o6a4jWQhXFOxSdAGls6GuQsxI"/>
   </ListView>
</StackLayout>
     </Page>   
</template>

<script>
    export default {
      created () {
     this.writeGenres()
     console.log(this.gameGenres);
     
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