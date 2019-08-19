<template>
<page>
    <ActionBar :title="$store.state.movieDetails.title" textWrap="true"></ActionBar>
    <ScrollView>
    <stackLayout>   
        
    <Image :src="$store.state.movieDetails.poster" height="350" width = "360" stretch="fill"/>
       

    <label :text="myString" fontSize="40"/>
       
    <!-- <label :text="$store.state.movieDetails.year"/> -->
    <Image src="../assets/images/star.png" stretch="none"/>
    <label :text="$store.state.movieDetails.rated"/>
    <label :text="$store.state.movieDetails.releaseDate"/>
      
    </stackLayout>
    </ScrollView>
</page>
</template>


<script>

export default {

    created(){
            this.text();


    },

    data(){
        return {
            myString:""
        }
    },
  
    methods:{
        text(){
            this.myString ="IMDB Rating: " + this.$store.state.movieDetails.imdbRatings
        }

    },
    components:{
        
    }
  
   

}
   



</script>
<style scoped>

</style>