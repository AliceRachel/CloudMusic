<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view class="router_view"></router-view>
    <btm-tab-bar v-show="tabActive!='playPage'"></btm-tab-bar>
    <loading v-show="pageLoading"></loading>
  </div>
</template>

<script>
  import BtmTabBar from './components/BtmTabBar'
  import HeaderBar from './components/header'
  import loading from './components/loading'
  export default {
    name: 'app',
    components: {
      BtmTabBar,
      HeaderBar,
      loading
    },
    computed: {
      tabActive(){
        return this.$store.state.tabActive
      },
      pageLoading(){
        return this.$store.state.pageLoading
      }
    }
  }
</script>

<style scoped>
  .router_view {
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
  }
</style>
