<template>
  <div class="discover_music">
    <discover-menu></discover-menu>
    <router-view class="dis_music_view"></router-view>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  import discoverMenu from './discoverMenu'
  export default{
    name: 'discoverMusic',
    components: {
      discoverMenu
    }
  }
</script>
<style scoped>
.dis_music_view{
  padding-top: 1rem;
}
</style>
