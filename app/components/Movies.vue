

<template>
<StackLayout>
<SearchBar ref="searchBar" hint="Search Movie or Tv-Series" height="60" v-model="searchPhrase" @submit="onSubmit" />
<ActivityIndicator :busy="progressLoad" :busyChange="onBusyChanged" />
   <ListView  ref="listView" for="item in movieArray" @itemTap="onItemTap" height="500" rowHeight="90">
  <v-template>
      <StackLayout orientation="horizontal" >
      <Image :src="item.Poster" stretch="aspectFit"/>
     <Label id="movieTitle" :text="item.Title" textWrap="true"/> 
      </StackLayout>
  </v-template>
</ListView> 
</StackLayout>
</template>


<script>
import MovieDetails from './MovieDetails.vue';



export default {
    created(){    
        //this.fetchMovies()
        // this.$refs.listview.nativeView.refresh();
       
    },
    data(){
        return{
            movieArray: null,
            searchPhrase: "",
            APIKEY: "90ebc08b",
            progressLoad:null
        }
    },
  
    methods:{
      
        onSubmit() {
            this.fetchMovies()
            this.dismissKeyboard();
            this.progressLoad = this.$store.state.movieDetails.loadingIndicator
        },
           onItemTap(event){
                  fetch(`https://omdbapi.com/?i=${event.item.imdbID}&apikey=${this.APIKEY}`)
           .then((r) => r.json())
            .then((response) => {
                this.$store.state.movieDetails.poster = response.Poster
             this.$store.state.movieDetails.title = response.Title
              this.$store.state.movieDetails.year = response.Year
               this.$store.state.movieDetails.rated = response.Rated
                this.$store.state.movieDetails.releaseDate = response.Released
                this.$store.state.movieDetails.imdbRatings = response.imdbRating
                this.$store.state.movieDetails.genre = response.Genre
                this.$store.state.movieDetails.plot = response.Plot
                this.$store.state.movieDetails.metaScore = response.Metascore
                this.$store.state.movieDetails.writer = response.Writer
                this.$store.state.movieDetails.rottenTomatoesRating = response.Ratings[1].Value
                this.$store.state.movieDetails.director = response.Director
                this.$store.state.movieDetails.actors = response.Actors
                
                    
          }).catch((e) => { });
            this.$navigateTo(MovieDetails);
            
       
    },

        fetchMovies(){  
           fetch(`https://omdbapi.com/?s=${this.searchPhrase}&apikey=${this.APIKEY}`)
            .then((r) => r.json())
            .then((response) => {

                if(response.Search == null){
                        alert('Error, could not find what you searched for.')
                    .then(() => {
                
                 });
                }
                this.movieArray = response.Search
                this.progressLoad = false
            }).catch((e) => {
                
                
            });
        } ,
         dismissKeyboard(){
            this.$refs.searchBar.nativeView.dismissSoftInput();
        } ,
       
    }
}

</script>

<style scoped>
#movieTitle {
   font-size: 18;
   padding: 0 20;
   text-align: center;
   vertical-align: center;
 }

</style>

