<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Books">
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onTap"/>
        </ActionBar>
        <WebView :src="$store.state.bookDetails.url" />
    </Page>
</template>

<script>
import Books from './Books.vue';

    export default { 
        data() {
            return {
                
            }
        },
        methods: {
            onTap() {
                this.$navigateBack(Books)
            }
        }
    }
</script>