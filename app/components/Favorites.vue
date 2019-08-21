<template>
  <Page>
    <ActionBar title="Favorites">
       <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
    </ActionBar>
    <AbsoluteLayout>

      <ListView ref="listView" for="item in showArr" left="0" top="0" width="100%" height="232" >
        <v-template>
          <YoutubePlayer :src="videoIdString" apiKey="AIzaSyDx4SdG7U7Q64gqqf3X-LDJIpavLhT78vk" />
        </v-template>
      </ListView>

      <ListView for="video in videos" @itemTap="onItemTap" @longPress="onLongPress" height="100%" rowHeight="90" left="0" top="233" width="100%">
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
        },
        onLoad() {
          console.log('Nu har vi bytt till Favorites komponenten');
          this.videos = this.$store.state.myFavoriteYouTubeVideos
          // this.$refs.listView.nativeView.refresh()
        },
        onItemTap(event) {
          if (this.isLongPressed) {
            //Ta bort favorit från video arr
            this.videos.splice(event.item, 1)
            this.$store.state.myFavoriteYouTubeVideos = this.videos

            this.isLongPressed = false
          } else {
            // Spela video
            this.videoIdString = event.item.videoId
          }
          this.$refs.listView.nativeView.refresh()
        },
        onLongPress() {
          console.log('Long press')
          this.isLongPressed = true
        }
      }
    }
</script>
