<template>
  <Page>
    <ActionBar title="Favorites">
       <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <AbsoluteLayout>

      <ListView for="video in videos" @itemTap="onItemTap" @longPress="onLongPress" height="100%" rowHeight="90" left="0" top="0" width="100%">
        <v-template>
          <StackLayout orientation="horizontal">
            <Image :src="video.thumbnail" stretch="aspectFit" />
            <Label :text="video.title" textWrap="true" />
          </StackLayout>
        </v-template>
      </ListView>

    </AbsoluteLayout>
  </Page>
</template>

<script>
import Music from './Music'
    export default {
      created() {
        this.onLoad()
      },
      data() {
        return{
          videos: [],
          videoIdString: "",
          showArr: [""],
          isLongPressed: false
        }
      },
      methods: {
        goBack() {
          this.$navigateBack(Music)
          // this.$navigateTo(Music)
        },
        onLoad() {
          console.log('Nu har vi bytt till Favorites komponenten');
          this.videos = this.$store.state.myFavoriteYouTubeVideos
        },
        onItemTap(event) {
          if (this.isLongPressed) {
            //Ta bort favorit från video arr
            this.videos.splice(event.index, 1)
            this.$store.state.myFavoriteYouTubeVideos = this.videos
            console.log('Loggar index för item vi ska ta bort', event.index);

            this.isLongPressed = false
          } else {
            // Spela video
            // this.videoIdString = event.item.videoId
            this.$store.state.videoIdString = event.item.videoId
            this.$navigateBack(Music)
          }
        },
        onLongPress() {
          console.log('Long press')
          this.isLongPressed = true
        }
      }
    }
</script>
