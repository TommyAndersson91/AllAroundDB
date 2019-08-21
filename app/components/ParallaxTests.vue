<template>
<Page class="page">
      <ActionBar :title="$store.state.movieDetails.title + '('+`${$store.state.movieDetails.year}`+')'" textWrap="true">
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <scrollView ref="scrollView" @scroll="onScroll">
        <StackLayout>
        <StackLayout ref="topView" height="250" style="background-image: url('~/assets/images/dave.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover;">
       
        </StackLayout>
        <StackLayout width="100%" class="grad" padding="10">
             <label text="Ratings" class="labelColor" textAlignment="center" fontSize="35" marginTop="-3" marginBottom="3"/>

             <CardView backgroundColor="lightGray" margin="10" elevation="40" radius="5">
           <GridLayout rows="100, auto, auto" columns="auto, auto, *">
               
                <FlexboxLayout alignItems="flex-start" >
                    <label  color="black" text="IMDB" width="80" height="50" marginLeft="40" marginTop="1" class="info" row="1" colSpan="3" />
                    <label color="black" fontSize="16"  text="Metascore" width="80" height="50" marginLeft="5" marginRight="45" class="info" row="1" colSpan="3" />
                     <label color="black" fontSize="13"  text="Rotten Tomatoes" width="120" height="50" marginLeft="-32" class="info" row="1" colSpan="" />
                </FlexboxLayout>

             <FlexboxLayout alignItems="flex-start" marginTop="-30" class="ratingsLayout" >

                <Label fontSize="14" textWrap="true" textAlignment="center" padding="25" :text="$store.state.movieDetails.imdbRatings" width="70" height="65" marginRight="20" marginLeft="25" marginTop="50" class="info" row="1" colSpan="3"  style="background-image: url('~/assets/images/star.png');  background-repeat: no-repeat; background-position: center; background-size: cover;"/>
                <Label fontSize="17" textAlignment="center" padding="20" textWrap="true" :text="$store.state.movieDetails.metaScore" width="70" height="65" marginRight="20" marginLeft="15" marginTop="50" backgroundColor="#66cc33" class="info" row="1" colSpan="3" />
                <Label fontSize="14" textWrap="true" textAlignment="center" padding="25" :text="$store.state.movieDetails.rottenTomatoesRating" width="70" height="70" marginRight="25" marginLeft="15" marginTop="50" class="info" row="1" colSpan="3"  style="background-image: url('~/assets/images/tomate.png');  background-repeat: no-repeat; background-position: center; background-size: cover;"/>

             </FlexboxLayout>
               <!-- <Label text="Batman wants to be friends?" textWrap="true"  class="info" row="1" colSpan="2" /> -->
              
           </GridLayout>
       </CardView>               
            <!--sido innehåll här -->
            <label fontStyle="Bold" text="Plot" class="labelColor" textAlignment="center" fontSize="35" marginTop="2" marginBottom="3"/>
            <label  fontSize="20" class="labelColor" textAlignment="center" textWrap="true"  :text="$store.state.movieDetails.plot"/>
            
             <label textWrap="true" marginTop="15" fontSize="25" class="labelColor" :text="'Release: '+' '+`${$store.state.movieDetails.releaseDate}`"/> 
            <label textWrap="true" marginTop="15"  fontSize="25" class="labelColor" :text="'Genre: '+' '+`${$store.state.movieDetails.genre}`"/> 
            <label textWrap="true" marginTop="15"  fontSize="25" class="labelColor" :text="'Directed by: '+' '+`${$store.state.movieDetails.director}`"/> 
            <label textWrap="true" marginTop="15"   fontSize="25" class="labelColor" :text="'Written by: '+' '+`${$store.state.movieDetails.writer}`"/>
            <label textWrap="true" marginTop="15"   fontSize="25" class="labelColor" :text="'Actors: '+' '+`${$store.state.movieDetails.actors}`"/> 


        </StackLayout>
        </StackLayout>
    </scrollView>
</Page>
</template>
<script>
import Movies from './Movies.vue';

export default {
    created(){
           
    },

    data(){
        return {
            
        }
    },

    methods:{
         
       
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
  .grad{
      background-image: linear-gradient(#1D2B64,#F8CDDA)
  }
  .labelColor{
      color: rgba(255, 250, 250, 0.762)
  }
 

.align-center {
  vertical-align: center;
  horizontal-align: center;
}

.blue {
  color: #6a78c5;
}

.gray {
  color: #666;
}

.white {
  color: #fff;
}

.blackCard {
  background-color: #333;
  color: white;
}

.blueCard {
  background-color: #3489db;
  color: white;
}

.jokerCard {
  background-color: yellow;
}

.whiteCard {
  background-color: #fff;
}

</style>