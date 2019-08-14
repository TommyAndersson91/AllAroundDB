<template>
<StackLayout>
<SearchBar hint="Search Movie or Tv-Series" height="60" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" />
   <ListView for="item in testArray" @itemTap="onItemTap" height="500" rowHeight="90">
  <v-template>
    <Label :text="item" />
  </v-template>
</ListView>

</StackLayout>
</template>


<script>
export default {
    data(){
        return{
            testArray:["Apa","Apa2","Apa3"]
        }
    }
}
</script>

<style>

</style>
