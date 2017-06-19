<template>
  <div class="header" v-show="(tabActive!='detailMusicList')&&(tabActive!='playPage')">
    <dm-header v-show="tabActive=='discoverMusic'"></dm-header>
    <mm-header v-show="tabActive=='myMusic'"></mm-header>
    <fri-header v-show="tabActive=='friends'"></fri-header>
    <accout-header v-show="tabActive=='account'"></accout-header>
    <span class="iconfont icon-gaodiyin"></span>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  import dmHeader from './dm_header'
  import mmHeader from './mm_header'
  import friHeader from './fri_header'
  import accoutHeader from './accout_header'
  export default{
    computed: {
      tabActive(){
        return this.$store.state.tabActive;
      }
    },
    components: {
      dmHeader,
      mmHeader,
      friHeader,
      accoutHeader
    }
  }
</script>
<style scoped>
  .header {
    background-color: red;
    width: 100%;
    height: 1.6rem;
    color: white;
    font-size: 0;
    font-family: "Adobe 黑体 Std R";
    position: fixed;
    z-index: 999;
  }

  .iconfont {
    font-weight: 100;
  }

  .icon-gaodiyin {
    display: inline-block;
    width: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    font-size: .8rem;
  }

</style>
