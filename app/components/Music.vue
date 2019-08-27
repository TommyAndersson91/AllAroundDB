<template>
<AbsoluteLayout ref="rootLayout">
  <SearchBar ref="searchBar" hint="Search musicvideo" left="0" top="0" height="60" width="100%" v-model="searchPhrase" @submit="onSubmit" />


  <ListView ref="listView" for="item in youTubeViewArray" left="0" top="60" width="100%" height="232">
    <v-template>
      <YoutubePlayer :src="$store.state.videoIdString" apiKey="AIzaSyDNXKBfPQn6ygsQQNIO6xQli8tFFI4W_bE" />
    </v-template>
  </ListView>

  <ListView for="video in videos" @itemTap="onItemTap" @longPress="onLongPress" height="100%" rowHeight="90" left="0" top="292" width="100%">
    <v-template>
      <StackLayout orientation="horizontal">
        <Image :src="video.snippet.thumbnails.default.url" stretch="aspectFit" />
        <Label :text="video.snippet.title" textWrap="true" />
      </StackLayout>
    </v-template>
  </ListView>
  <AbsoluteLayout ref="fabItemPosition" marginTop="87%" marginLeft="80%">
    <FabButton @onButtonTap="onButtonTap" />
  </AbsoluteLayout>

</AbsoluteLayout>
</template>

<script>

import axios from 'axios'
import FabButton from './FabButton'
import Favorites from './Favorites'
export default {
  created() {
  this.$store.commit('destroyYoutube')
  },
  mounted() {
  this.$store.commit('destroyYoutube')
  },
  updated() {
  this.$store.commit('destroyYoutube')
  },
  data() {
    return {
      youTubeViewArray: [" "],
      searchPhrase: '',
      videos: [],
      reformattedSearchString: '',
      fullUrlString: "https://i.ytimg.com/vi/AewNd29wRUM/default.jpg",
      videoIdString: "",
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 10,
        q: '',
        key: "AIzaSyDNXKBfPQn6ygsQQNIO6xQli8tFFI4W_bE",
        prevPageToken: '',
        nextPageToken: '',
        isLongPressed: false
      }
    }
  },
  components: {
    FabButton
  },
  methods: {
    onButtonTap(args) {
      console.log("FabButton tapped!!")
      this.$navigateTo(Favorites)
    },
    onLongPress() {
      console.log("You performed a longPress")
      this.isLongPressed = true
    },
    onItemTap(event) {
      if (this.isLongPressed) {
        console.log("Longpress in onItemTap func!")
        let myFavoriteVideo = {
          title: event.item.snippet.title,
          thumbnail: event.item.snippet.thumbnails.default.url,
          videoId: event.item.id.videoId
        }
        this.$store.commit('addFavoriteVideos', myFavoriteVideo)
        this.isLongPressed = false
      } else {
        // this.videoIdString = ""
        this.$store.state.videoIdString = event.item.id.videoId
        // this.videoIdString = event.item.id.videoId
      }
      this.$refs.listView.nativeView.refresh()
    },
    dismissKeyboard() {
      this.$refs.searchBar.nativeView.dismissSoftInput();
    },
    onSubmit() {
      this.dismissKeyboard()
      this.videos.length = 0
      console.log('Finished searched', this.searchPhrase)

      const trimmedSearchString = this.searchPhrase.trim()

      if (trimmedSearchString !== '') {
        const searchParams = trimmedSearchString.split(/\s+/)
        this.search(searchParams)
        console.log(searchParams)
        this.searchPhrase = ''
      }
    },
    search(searchParams) {
      console.log(searchParams)
      this.reformattedSearchString = searchParams.join(' ')
      this.api.q = searchParams.join('+')
      const {
        baseUrl,
        part,
        type,
        order,
        maxResults,
        q,
        key
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}`
      //console.log('Loggar apiUrl', apiUrl)
      this.getData(apiUrl)
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(result => {
          this.videos = result.data.items
          this.$refs.listView.nativeView.refresh()
        })
        .catch(error => console.log(error));
    }
  }
}
</script>

<style scoped>

</style>
