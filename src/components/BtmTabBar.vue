<template>
  <div class="btm_tab_bar">
      <ul>
        <router-link tag="li" to="/" :class="{active:tabActive=='discoverMusic'||tabActive=='detailMusicList'}">
          <span class="iconfont icon-wangyiyunyinlezizhi-copy"></span>
          <p>发现音乐</p>
        </router-link>
        <router-link tag="li" to="/myMusic" :class="{active:tabActive=='myMusic'}">
          <span class="iconfont icon-yinle"></span>
          <p>我的音乐</p>
        </router-link>
        <router-link tag="li" to="/friends" :class="{active:tabActive=='friends'}">
          <span class="iconfont icon-pengyou"></span>
          <p>朋友</p>
        </router-link>
        <router-link tag="li" to="/account" :class="{active:tabActive=='account'}">
          <span class="iconfont icon-zhanghao"></span>
          <p>账号</p>
        </router-link>
      </ul>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  export default{
    name: 'BtmTabBar',
    computed: {
      tabActive(){
        return this.$store.state.tabActive;
      }
    }
  }
</script>
<style scoped>
  .btm_tab_bar {
    bottom: 0;
    background-color: rgba(32, 32, 32, 0.96);
    width: 100%;
    height: 1.6rem;
    color: #ccc;
    position: fixed;
    z-index: 999;
  }

  ul {
    font-size: 0;
    width: 100%;
    height: 100%;
  }

  .btm_tab_bar li {
    display: inline-block;
    font-size: 12px;
    width: 25%;
    height: 100%;
    text-align: center;
  }

  .btm_tab_bar .iconfont {
    font-size: .8rem;
    margin-top: .2rem;
    display: inline-block;
    font-weight: 100;
  }

  li p {
    margin-top: 3px;
  }

  .btm_tab_bar .active {
    color: white;
  }

</style>
