<template>
<StackLayout>
  <!-- Bestsellers NYTimes (15 books) -->
  <ListView for="book in books" @itemTap="onItemTap" height="500" rowHeight="200">
    <v-template>
      <stackLayout orientation="horizontally">
        <!-- Ranking -->
        <Label id="rank" textWrap="true">
          <FormattedString>
            <Span :text="book.rank" style="color: black" fontWeight="bold" />
            <Span text="(" style="color: gray" fontStyle="italic" />
            <Span :text="book.rank_last_week" style="color: gray" fontStyle="italic" />
            <Span text=")" style="color: gray" fontStyle="italic" />
          </FormattedString>
        </Label>
        <!-- BookCover -->
        <Image id="cover" :src="book.book_image" stretch="aspectFit" />
        <!-- Title -->
        <Label id="title" :text="book.title" textWrap="true" />
        <!-- Author -->
        <Label id="author" :text="book.author" textWrap="true" />
      </stackLayout>
    </v-template>
  </ListView>
</StackLayout>
</template>

<script>
import BookDetails from './BookDetails.vue'
import {
  log
} from 'util'
export default {
  created() {
    console.log("Created method up and running!")
    this.fetchBooks()
  },
  data() {
    return {
      books: [],
      //APIkey: "6R6lb0uoL6JpdxpbzusCexClcxGYWa8E"
    }
  },
  methods: {
    fetchBooks() {
      console.log("fetchBooks method clicked!")

      fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=6R6lb0uoL6JpdxpbzusCexClcxGYWa8E")
        .then(res => res.json())
        .then(res => {
          this.books = res.results.books;
          // console.log(this.books.map(book => book.title))
          //for (let i = 0; i < res.results.books.length; i++) {
          //const element = res.results.books[i];
          //console.log(element.title, element.author)
          //}
        })
        .catch(e => {
          console.log(e)
        })
    },
    onItemTap(event) {
      console.log("onItemTap method clicked!")
      console.log(event.index)

      this.$store.state.bookDetails.author = this.books[event.index].author
      this.$store.state.bookDetails.cover = this.books[event.index].book_image
      this.$store.state.bookDetails.description = this.books[event.index].description
      this.$store.state.bookDetails.publisher = this.books[event.index].publisher
      this.$store.state.bookDetails.ranking = this.books[event.index].rank
      this.$store.state.bookDetails.rankingLastWeek = this.books[event.index].rank_last_week
      this.$store.state.bookDetails.rankingNrOfWeeks = this.books[event.index].weeks_on_list
      this.$store.state.bookDetails.title = this.books[event.index].title
      this.$store.state.bookDetails.url = this.books[event.index].amazon_product_url

      this.$navigateTo(BookDetails)
    }
  }
}
</script>

<style scoped>
#author {
  color: rgb(128, 125, 125);
  font-size: 18;
  font-style: italic;
  padding: 0 40;
  text-align: center;
  vertical-align: center;
}

#cover {
  height: 250px;
  width: 200vh;
  margin-bottom: 12;
}

#rank {
  font-size: 24;
  font-weight: bold;
  margin-left: 24;
}

#title {
  color: black;
  font-family: monospace;
  font-size: 20;
  padding: 0 40;
  text-align: center;
  vertical-align: center;
}
</style>
