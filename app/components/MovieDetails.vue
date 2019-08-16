<template>
<page>
    <ScrollView>
    <stackLayout>
    <Image :src="$store.state.movieDetails.poster" height="350" width = "360" stretch="fill"/>
    <label :text="$store.state.movieDetails.title" />
    <label :text="$store.state.movieDetails.year"/>
    <label :text="$store.state.movieDetails.rated"/>
    <label :text="$store.state.movieDetails.releaseDate"/>


    </stackLayout>
    </ScrollView>
</page>
</template>


<script>

export default {

    created(){

    },

    data(){
        return {

        }
    },
    methods:{

    },
  
   

}
   



</script>
<style scoped>

</style>