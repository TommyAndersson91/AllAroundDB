<template>
<Page class="page">
  <ActionBar class="action-bar" title="Books">
    <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="backToBooks" />
  </ActionBar>

  <GridLayout>
    <GridLayout rows="auto,*,auto,auto">
      <StackLayout class="top-border" row="0" />
      <ScrollView row="1" class="fields-section">
        <StackLayout>
          <!-- BookCover -->
          <!-- DELETE ios android -->
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Image :src="$store.state.bookDetails.cover" stretch="aspectFit" />
          </GridLayout>
          <!-- BookGenre -->
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <label text="Genre" class="field-title" />
            <label text="Hardcover Fiction" class="field" textWrap="true" />
          </GridLayout>
          <StackLayout class="line" />
          <!-- BookAuthor -->
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Label text="Author" class="field-title" />
            <label :text="$store.state.bookDetails.author" class="field" textWrap="true" />
          </GridLayout>
          <StackLayout class="line" />
          <!-- Publisher -->
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Label text="Publisher" class="field-title" />
            <label :text="$store.state.bookDetails.publisher" class="field" textWrap="true" />
          </GridLayout>
          <StackLayout class="line" />
          <!-- BookDescription -->
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Label text="Description" class="field-title" />
          </GridLayout>
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <label :text="$store.state.bookDetails.description" class="field-special" textWrap="true" />
          </GridLayout>
          <StackLayout class="line" />
          <!-- Ranking -->
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Label text="This week's ranking" class="field-title" />
            <label :text="$store.state.bookDetails.ranking" class="field" textWrap="true" />
          </GridLayout>
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Label text="Last week's ranking" class="field-title" />
            <label :text="$store.state.bookDetails.rankingLastWeek" class="field" textWrap="true" />
          </GridLayout>
          <GridLayout ios:columns="auto,*" android:rows="auto, auto" verticalAlignment="top">
            <Label text="Number of weeks on list" class="field-title" />
            <label :text="$store.state.bookDetails.rankingNrOfWeeks" class="field" textWrap="true" />
          </GridLayout>
          <StackLayout class="line" />
        </StackLayout>
      </ScrollView>
      <!-- Buttons -->
      <GridLayout row="3" columns="*,*">
        <Button text="Buy online" class="buy" @tap="buttonBuyPressed" col="0" />
        <Button text="Cancel" class="cancel" @tap="buttonCancelPressed" col="1" />
      </GridLayout>
    </GridLayout>
  </GridLayout>
</Page>
</template>

<script>
var utilityModule = require("utils/utils");
import Books from './Books.vue';
import BookWebViewVue from './BookWebView.vue';

export default {
  data() {
    return {

    }
  },
  methods: {
    backToBooks(event) {
      console.log('backToBooks method clicked!');
      this.$navigateBack(Books)
    },
    buttonCancelPressed() {
      console.log('buttonCancelPressed method clicked!');
      this.$navigateBack(Books)
    },
    buttonBuyPressed(event) {
      console.log('buttonBuyPressed method clicked!');
      console.log(this.$store.state.bookDetails.url);
      //utilityModule.openUrl(this.$store.state.bookDetails.url);
      this.$navigateTo(BookWebViewVue)
    }
  },
  components: {}
}
</script>
<style scoped>
.action-bar {
  background-color: #53ba82;
  color: #ffffff;
}

.field {
  text-align: right;
  font-size: 20;
  font-style: italic;
  color: rgb(128, 125, 125);
  padding: 10 0;
}

.fields-section {
  margin-left: 12;
  margin-right: 12;
}

.field-special {
  text-align: left;
  font-size: 20;
  font-style: italic;
  color: rgb(128, 125, 125);
  padding: 0 0;
}

.field-title {
  text-align: left;
  font-size: 20;
  color: black;
  padding: 10 0;
}

.line {
  background-color: #53ba82;
  height: 1;
  margin: 0;
}

.buy {
  text-align: center;
  color: white;
  background-color: #53ba82;
  height: 36;
}

.cancel {
  text-align: center;
  color: white;
  background-color: #7f8180;
  height: 36;
}
</style>
