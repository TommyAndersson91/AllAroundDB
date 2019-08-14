<!-- Home.vue -->

<template>
<StackLayout>
  <SearchBar
    hint="Search music" height="60"
    v-model="searchedText"
    @submit="onSubmit" />
  <ListView for="item in musicArray" @itemTap="onItemTap" height="500" rowHeight="90">
    <v-template>
      <Label :text="item.strTrack" />
    </v-template>
  </ListView>

</StackLayout>
</template>

<script>
export default {
  data() {
    return {
      musicArray: [],
      songName: null,
      APIKEY: "195003",
      searchedText: "",
      top10Tracks: "",
      top10TracksFirstStr: "https://www.theaudiodb.com/api/v1/json/",
      top10TracksSecondStr: "/track-top10.php?s="
    }
  },
  methods: {
    onItemTap(event) {
      console.log(event.index)
      console.log(event.item.strTrack)
    },
    onSubmit() {
      this.musicArray.length = 0
      console.log("submitted text is", this.searchedText)
      this.top10Tracks = `https://www.theaudiodb.com/api/v1/json/${this.APIKEY}/track-top10.php?s=${this.searchedText}`

      console.log(this.top10Tracks)

      fetch(this.top10Tracks)
        .then(response => response.json())
        .then(result => {
          console.log(result.track.strTrack);
          this.musicArray = result.track
         })

    }
  }
}
</script>
