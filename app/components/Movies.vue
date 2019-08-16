

<template>
<StackLayout>
<SearchBar hint="Search Movie or Tv-Series" height="60" v-model="searchPhrase" @submit="onSubmit" />
   <ListView  for="item in movieArray" @itemTap="onItemTap" height="500" rowHeight="90">
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
        this.fetchMovies()
    },
    data(){
        return{
            movieArray: null,
            searchPhrase: "",
            APIKEY: "90ebc08b"
        }
    },
  
    methods:{
        onSubmit() {
            console.log(this.searchPhrase)
            this.fetchMovies()
        },
           onItemTap(event){
            this.$navigateTo(MovieDetails);

          fetch(`https://omdbapi.com/?t=${event.item.Title}&apikey=${this.APIKEY}`)
           .then((r) => r.json())
            .then((response) => {
                this.$store.state.movieDetails.poster = response.Poster
             this.$store.state.movieDetails.title = response.Title
              this.$store.state.movieDetails.year = response.Year
               this.$store.state.movieDetails.rated = response.Rated
                this.$store.state.movieDetails.releaseDate = response.Released
                    
          }).catch((e) => { });
    },

        fetchMovies(){  
           fetch(`https://omdbapi.com/?s=${this.searchPhrase}&apikey=${this.APIKEY}`)
            .then((r) => r.json())
            .then((response) => {

                this.movieArray = response.Search
                // console.log(this.movieArray)

            //     for (let i = 0; i < response.Search.length; i++) {
            //         const element = response.Search[i];
            //        console.log("FILMENS NAME: ",element.Title,"FILMENS ÅR: ",element.Year);
            //        console.log("");
                   
            //        this.movieArray.push({title: element.Title, year: element.Year})
                   
            //    }
               
                  // this.movieArray.push({ title: response.Search.Title, year: response.Search.Year })
                    
                //this.movieArray.push({ title: '', year: 2019 })
                   // this.movieArray.push({title: response.Search.Title,year:response.Search.Year }) 
                
                  //var apa = this.movieArray.map(movie => movie.Title)
                     
                   
                

                //  console.log("SEARCH");
                // console.log(response);               
              
            }).catch((e) => {
            });
        }  
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

