<template>
  <div class="discover_menu">
    <router-link tag="li" to="selfRecommend" active-class="selected">个性推荐</router-link>
    <router-link tag="li" to="musicList" active-class="selected">歌单</router-link>
    <router-link tag="li" to="hostStation" active-class="selected">主播电台</router-link>
    <router-link tag="li" to="billboard" active-class="selected">排行榜</router-link>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  export default{
    name: 'discoverMenu',
    computed: {

    }
  }
</script>

<style scoped>
  .discover_menu {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    border-bottom:1px solid rgba(234, 234, 234, 0.8);
    position: fixed;
    z-index: 998;
    background-color: rgba(255,255,255,.98);
  }

  li {
    line-height: 1rem;
  }

  .selected {
    border-bottom: 2px solid red;
    color: red;
  }
</style>
