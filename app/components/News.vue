<!-- Home.vue -->

<template>
<FlexboxLayout flexDirection="column">
  <ActivityIndicator id="progressBar" v-if="loading" busy="true" />
  <ListView for="article in articles" background="#FFF" @itemTap="onItemTap">
    <v-template>
      <FlexboxLayout flexDirection="column">
        <Image id="image-preview" :src="article.urlToImage" stretch="aspectFill" />
        <Label id="title" :text="article.title" />
        <Label id="description" :text="article.description" textWrap="true" />
        <Label id="author" :text="article.author" />
        <Label id="author" :text="article.publishedAt" />
        <Label id="author" :text="article.source.name" />
      </FlexboxLayout>
    </v-template>
  </ListView>
</FlexboxLayout>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [],
      loading: false
    };
  },
  methods: {
    newsFetcher() {
      this.loading = true;
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=se&category=general&apiKey=38c258ceab8e4b8fbb5d68d015627a80"
        )
        .then(response => {
          this.articles = response.data.articles;
          console.log(this.articles[0]);
          this.loading = false;
        });
    },
    onItemTap(event) {
      console.log(event.item.url);
      this.$store.commit('setUrl', event.item.url)
      this.$goto(`webView`);
    }
  },
  mounted() {
    this.newsFetcher();
  }
};
</script>
<style>
#progressBar {
  margin-top: 30%;
}

#title {
  font-weight: bold;
  margin-top: 16px;
}

#image-preview {
  height: 700px;
  width: 100vh;
}

#description {
  margin-top: 14px;
  margin-bottom: 16px;
}

#author {
  margin-bottom: 16px;
  font-style: italic;
}
</style>
