<template>
  <div class="my_music">
    <ul class="item_nav">
      <li>
        <span class="iconfont icon-yinle"></span>
        <div class="underline_item">
          <span class="item_des">本地音乐</span>
          <span>0</span>
          <span class="iconfont icon-arrow-right"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-zuijinbofang"></span>
        <div class="underline_item">
          <span class="item_des">最近播放</span>
          <span>0</span><span class="iconfont icon-arrow-right"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-yuleyinlediantai"></span>
        <div class="underline_item">
          <span class="item_des">我的电台</span>
          <span>0</span><span class="iconfont icon-arrow-right"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-wodeshoucang"></span>
        <router-link class="underline_item" @click.native="goToFavoriteList" to="/detailMusicList">
        <!--<div class="underline_item" @click="goToFavoriteList">-->
          <span class="item_des">我的收藏</span>
          <span>{{favoriteMusic.length}}</span>
          <span class="iconfont icon-arrow-right"></span>
        <!--</div>-->
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  export default{
    computed: {
      favoriteMusic(){
        return this.$store.state.favoriteMusic
      }
    },
    methods:{
      goToFavoriteList(){
          return this.$store.dispatch('goToFavoriteList')
      }
    }
  }
</script>
<style lang="scss" scoped>
  li {
    width: 100%;
    height: 1.4rem;
    font-size: 0;
    .iconfont {
      display: inline-block;
      width: 1.4rem;
      height: 100%;
      color: red;
      text-align: center;
      line-height: 1.4rem;
      font-size: .8rem;
    }
    .icon-arrow-right {
      float: right;
      color: grey;
      font-size: 16px;
    }
  }

  .underline_item {
    border-bottom: 1px solid rgba(228, 228, 228, .8);
    display: inline-block;
    width: 8.6rem;
    height: 100%;
    line-height: 1.4rem;
    font-size: 14px;
    color: black;
    vertical-align: top;
  }

  .item_des {
    display: inline-block;
    height: 100%;
    vertical-align: top;
  }

</style>
