<!-- Home.vue -->

<template>
<StackLayout>
  <SearchBar hint="Search music" height="60" v-model="searchString" @submit="onSubmit" />


  <ListView ref="listView" for="item in youTubeViewArray" height="231" rowHeight="231">
  <StackLayout height="250">
    <v-template>
      <YoutubePlayer :src="videoIdString" alt="https://i.ytimg.com/vi/lPU3h5RCI7A/default.jpg" apiKey="AIzaSyDNXKBfPQn6ygsQQNIO6xQli8tFFI4W_bE"/>
    </v-template>
  </StackLayout>
</ListView>
<StackLayout orientation="horizontal">
  <label>Published at</label>
  <label>Views</label>
</StackLayout>

  <ListView for="video in videos" @itemTap="onItemTap" height="*" rowHeight="90">
    <v-template>
      <StackLayout orientation="horizontal">
        <Image :src="video.snippet.thumbnails.default.url" stretch="aspectFit" />
        <Label :text="video.snippet.title" textWrap="true" />
      </StackLayout>
    </v-template>
  </ListView>
</StackLayout>
</template>

<script>
var youtubeParser = require('nativescript-youtube-parser')
import axios from 'axios';
export default {
  data() {
    return {
      youTubeViewArray: [" "],
      searchString: '',
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
        nextPageToken: ''
      }
    }
  },
  components: {},
  methods: {
    onItemTap(event) {
      this.videoIdString = ""
      this.fullUrlString = 'https://www.youtube.com/watch?v='
      console.log(event.index)
      this.fullUrlString = this.fullUrlString + event.item.id.videoId
      this.indexOfVideoToPlay = event.index
      this.videoIdString = event.item.id.videoId
      console.log(this.fullUrlString)
      console.log(this.videoIdString)

      this.$refs.listView.nativeView.refresh()


      //Parse youtube url to mp4 url
      // youtubeParser.getURL(this.fullUrlString, {
      //     quality: 'medium',
      //     container: 'mp4'
      //   })
      //   .then(result => {
      //     console.log(result)
      //     this.videoIdString = result[0].url
      //     console.log("Här loggar vi som fan också", this.videoIdString)
      //   })
      //   console.log("Här loggar vi som fan", this.videoIdString)
    },
    onSubmit() {
      this.videos.length = 0
      console.log('Finished searched', this.searchString)
      // Trim search string
      const trimmedSearchString = this.searchString.trim()

      if (trimmedSearchString !== '') {
        // Split search string
        const searchParams = trimmedSearchString.split(/\s+/)
        // Emit event
        this.search(searchParams)
        console.log(searchParams)
        // Reset input field
        this.searchString = ''
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
      console.log('Loggar apiUrl', apiUrl)
      this.getData(apiUrl)
    },
    prevPage() {
      const {
        baseUrl,
        part,
        type,
        order,
        maxResults,
        q,
        key,
        prevPageToken
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${prevPageToken}`;
      this.getData(apiUrl);
    },
    nextPage() {
      const {
        baseUrl,
        part,
        type,
        order,
        maxResults,
        q,
        key,
        nextPageToken
      } = this.api;
      const apiUrl = `${baseUrl}part=${part}&type=${type}&order=${order}&q=${q}&maxResults=${maxResults}&key=${key}&pageToken=${nextPageToken}`
      this.getData(apiUrl)
    },
    getData(apiUrl) {
      axios
        .get(apiUrl)
        .then(result => {
          this.videos = result.data.items;
          this.api.prevPageToken = result.data.prevPageToken;
          this.api.nextPageToken = result.data.nextPageToken;
        })
        .catch(error => console.log(error));
    }
  }
}
</script>
