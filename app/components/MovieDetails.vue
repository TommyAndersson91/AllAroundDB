<template>
<page>
    <ActionBar :title="$store.state.movieDetails.title" textWrap="true">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <ScrollView>
    <stackLayout>   
        
    <Image :src="$store.state.movieDetails.poster" height="350" width = "360" stretch="fill"/>
        
    <stackLayout orientation="horizontal" class="ratingsLayout">

    <Image src="~/assets/images/star.png" stretch="aspectFill" height="40" width="40"/>
   
    <label :text="imdbRatingString" fontSize="15" textWrap="true" horizontalAlignment="center" width="70"/>
      <label :text="$store.state.movieDetails.rated" width="70"  />
    <label :text="$store.state.movieDetails.releaseDate" width="70" textWrap="true"/>
    <label :text="$store.state.movieDetails.genre" width="70" textWrap="true"/>

    </stackLayout>

    <stackLayout>
  
  
       </stackLayout>
    </stackLayout>
    </ScrollView>
</page>
</template>


<script>
import Movies from './Movies.vue';

export default {
    created(){
            this.text();
    },

    data(){
        return {
            imdbRatingString:""
        }
    },
  
    methods:{
        text(){
            this.imdbRatingString = this.$store.state.movieDetails.imdbRatings + "/10"
        },
        goBack(event){
            this.$navigateBack(Movies);
        }

    },
    components:{
        
    }
  
   

}
   



</script>
<style scoped>
.ratingsLayout{
    border-color:black;
    border-top-width: 1 ;
    border-bottom-width: 1;
}

</style>