<template>
    <Page class="page">
        <ActionBar class="action-bar" title="News">
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onTap"/>
        </ActionBar>
        <WebView :src="url" />
    </Page>
</template>

<script>
import News from './News.vue';
export default {
  data() {
    return {
    };
  },
  computed: {
    url() {
        return this.$store.state.url; 
    }
  },
        methods: {
            onTap() {
              this.$navigateBack(News)
            }
        }
};
</script>