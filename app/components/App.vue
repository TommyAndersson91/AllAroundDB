<template>
  <Page>
    <ActionBar class="ActionBar"></ActionBar>
    <TabView>
  <TabViewItem title="News">
    <news />
  </TabViewItem>
  <TabViewItem title="Movies">
    <movies />
  </TabViewItem>
  <TabViewItem title="Music">
    <music />
  </TabViewItem>
  <TabViewItem title="Games">
    <games />
  </TabViewItem>
  <TabViewItem title="Books">
    <books />
  </TabViewItem>
</TabView> 
  </Page>
</template>

<script >
import Home from './App' 
import Games from './Games' 
import Books from './Books'
import Movies from './Movies'
import News from './News'
import Music from './Music'



export default {

  created(){
   
     
  },

  data() {
    
    
    return {

    }
  },
  components: {
   'home': Home, 
   'games': Games, 
   'books': Books,
   'movies': Movies,
   'news': News,
   'music': Music,
  },
  methods: {
    
      
  }
}


</script>

<style scoped>
  ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}  


.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
