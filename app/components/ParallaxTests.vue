<template>
<Page class="page">
      <ActionBar :title="$store.state.movieDetails.title" textWrap="true">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <scrollView ref="scrollView" @scroll="onScroll">
        <StackLayout>
        <StackLayout ref="topView" height="250" style="background-image: url('~/assets/images/dave.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover;">
       
        </StackLayout>
        <StackLayout width="100%" backgroundColor="#3c495e" padding="10">
             <label text="Ratings" color="white" textAlignment="center" fontSize="35" marginTop="-3" marginBottom="3"/>

                <FlexboxLayout alignItems="flex-start" >
                    <label  color="white" text="IMDB" width="80" height="50" marginLeft="44"/>
                    <label color="white" text="Metascore" width="80" height="50" marginLeft="6.5"/>
                     <label  color="white" text="Rotten Tomatoes" width="120" height="50" marginLeft="10"/>
                </FlexboxLayout>

             <FlexboxLayout alignItems="flex-start" marginTop="-30" class="ratingsLayout" >

                <Label fontSize="14" textWrap="true" textAlignment="center" padding="25" :text="$store.state.movieDetails.imdbRatings" width="70" height="65" marginRight="20" marginLeft="25" style="background-image: url('~/assets/images/star.png');  background-repeat: no-repeat; background-position: center; background-size: cover;"/>
                <Label fontSize="17" textAlignment="center" padding="20" textWrap="true" :text="$store.state.movieDetails.metaScore" width="70" height="65" marginRight="20" marginLeft="15"  backgroundColor="#66cc33"/>
                <Label fontSize="14" textWrap="true" textAlignment="center" padding="25" :text="$store.state.movieDetails.rottenTomatoesRating" width="70" height="70" marginRight="25" marginLeft="15" style="background-image: url('~/assets/images/tomate.png');  background-repeat: no-repeat; background-position: center; background-size: cover;"/>

             </FlexboxLayout>
            <!--sido innehåll här -->
            <label text="Plot" color="white" textAlignment="center" fontSize="35" marginTop="2" marginBottom="3"/>
            <label  fontSize="20" color="white" textAlignment="center" textWrap="true" class="p-10" :text="$store.state.movieDetails.plot"/>
             <label textWrap="true" marginTop="15" color="white" fontSize="25" class="p-10" :text="releaseDateString"/> 
            <label textWrap="true" marginTop="15" color="white" fontSize="25" class="p-10" :text="directedByString"/> 
            <label textWrap="true" marginTop="15"  color="white" fontSize="25" class="p-10" :text="writtenByString"/> 


        </StackLayout>
        </StackLayout>
    </scrollView>
</Page>
</template>
<script>
import Movies from './Movies.vue';

export default {
    created(){
            this.textFormater();    
    },

    data(){
        return {
             directedByString:"",
             writtenByString:"",
             releaseDateString:""
        }
    },

    methods:{
            textFormater(){
                this.directedByString = "Directed by: " +" "+ this.$store.state.movieDetails.director;
                this.writtenByString = "Written by: " +" "+ this.$store.state.movieDetails.writer;
                this.releaseDateString = "Release: " +" "+ this.$store.state.movieDetails.releaseDate;
        },
       
        goBack(event){
            this.$navigateBack(Movies);
        },

            onScroll:function(){
                // för att komma åt native eventen
                const scrollView = this.$refs.scrollView.nativeView;
                const topView = this.$refs.topView.nativeView;

                if(scrollView.verticalOffset < 250){
                    const offset = scrollView.verticalOffset / 1.65;
                    if(scrollView.ios){
                        topView.animate({translate: {x:0,y:offset} }).then(() => {},() => {});
                    }else{
                        topView.translateY = Math.floor(offset)
                    }
                }
            },
            
    }
       

}
</script>
<style scoped>
  .ratingsLayout{
      border-color:black;
    border-bottom-width: 1;
  }

</style>