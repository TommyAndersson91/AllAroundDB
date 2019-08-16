<!-- Home.vue -->

<template>
<FlexboxLayout flexDirection="colomn">
<ListView for="book in books">
  <v-template>
    <stackLayout>
    <Label id="rank" :text="book.rank" />
    <Image id="cover" :src="book.book_image" stretch="aspectFit" />
    <Label id="title" :text="book.title" />
    <Label id="author" :text="book.author" />
    </stackLayout>
   </v-template>
  </ListView>
</FlexboxLayout>
</template>


<script>
  export default {
    created() {
      this.fetchBooks()
    },
    data() {
      return {
        books:[]
        //APIkey: "6R6lb0uoL6JpdxpbzusCexClcxGYWa8E"
      }
    },
    methods: {
      fetchBooks () {
      
        fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=6R6lb0uoL6JpdxpbzusCexClcxGYWa8E")
        .then(res=>res.json())
        .then(res => {
        this.books = res.results.books;
        for (let i = 0; i < res.results.books.length; i++) {
           const element = res.results.books[i];
           console.log(element.title, element.author)
            
     }
        console.log(this.books.map(book => book.title))
      })
      } 
    }
   
  }
  
</script>

<style scoped>

 
</style>