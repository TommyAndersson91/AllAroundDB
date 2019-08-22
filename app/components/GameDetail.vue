
<template>
<Page>
<StackLayout backgroundColor="#3c495e">
  <Label :text="this.$store.state.gameDetails.name" height="70" backgroundColor="#43b883" id="gameName"/>
  <Image v-bind:src="this.$store.state.gameDetails.IGDB_URL+this.$store.state.gameDetails.coverUrl+ '.jpg'" height="200" stretch="aspectFit"/>
  <Label :text="this.$store.state.gameDetails.fixedReleaseDate" height="70" backgroundColor="#1c6b48"/>
</StackLayout>
     </Page>   
</template>

<script>
    export default {


     }
</script>

<style scoped>

#gameName {
    font-size: 20;
    text-align: center;
}

</style>