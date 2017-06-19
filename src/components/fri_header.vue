<template>
  <div class="header_left">
    <span class="iconfont icon-addfriends"></span>
    <div class="search_frame">
      <div class="tab_zone">
        <router-link tag="li" to="status" active-class="activeTab">动态</router-link>
        <router-link tag="li" to="nearby" active-class="activeTab">附近</router-link>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  export default {
    components: {
    }
  }
</script>
<style scoped>
  .header_left {
    display: inline-block;
  }

  .iconfont {
    display: inline-block;
    width: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    font-size: .8rem;
  }
  .search_frame {
    display: inline-block;
    width: 6.8rem;
    height: 1.6rem;
    vertical-align: top;
    position: relative;
  }
  .tab_zone{
    width: 4rem;
    height: .8rem;
    border-radius: .8rem;
    border: 1px solid rgba(255,255,255,.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  li{
    font-size: 14px;
    display: inline-block;
    width: 2rem;
    text-align: center;
    line-height: .8rem;
    border-radius: .8rem;
  }
  .activeTab{
    background-color: white;
    color: red;
  }
</style>
