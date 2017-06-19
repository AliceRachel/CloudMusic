<template>
  <div class="header_left">
    <span class="iconfont icon-huatong"></span>
    <div class="search_frame">
      <span class="iconfont icon-sou"></span>
      <input type="text" placeholder="搜索音乐、歌词、电台" v-model="searchWord">
    </div>
    <transition name="bounce">
      <ul class="search_list" :class="{ifShow:searchWord===''}">
        <router-link to="playPage" tag="li" v-for="item in foundedMusicList" class="detail_list"
                     @click.native="chooseMusic(item)" :key="item.songname">{{
          item.songname}}-{{
          item.singername}}</router-link>
      </ul>
    </transition>
  </div>
</template>

<script type="text/javascript" charset="utf-8">
  export default {
    computed: {
      musicList(){
        return this.$store.state.playMusicLists
      },
      foundedMusicList(){
        return this.musicList.filter(item => item.songname.indexOf(this.searchWord) > -1 || item.singername.indexOf(this.searchWord) > -1)
      }
    },
    data(){
      return {
        searchWord: ''
      }
    },
    methods:{
      chooseMusic(item){
          return this.$store.dispatch('chooseMusic',item)
      }
    }
  }
</script>

<style scoped lang="scss">
  .header_left {
    display: inline-block;
  }

  .search_frame {
    display: inline-block;
    width: 6.8rem;
    position: relative;
    height: 100%;
    vertical-align: top;
  }

  .icon-huatong {
    display: inline-block;
    width: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    font-size: .8rem;
  }

  input {
    width: 5.8rem;
    height: .8rem;
    vertical-align: bottom;
    border-radius: 0.4rem;
    padding-left: 1rem;
    margin-top: .4rem;
  }

  .icon-sou {
    position: absolute;
    color: grey;
    font-size: .6rem;
    top: .5rem;
    left: .2rem;
  }

  .search_list {
    position: absolute;
    background-color: white;
    width: 100%;
    max-height: 14.6rem;
    overflow: scroll;
    top: 1.6rem;
    left: 0;
    li {
      width: 9.6rem;
      height: 1rem;
      color: black;
      font-size: 14px;
      line-height: 1rem;
      padding-left: .4rem;
      border-bottom: 1px solid rgba(219, 219, 219, 0.8);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .ifShow {
    display: none;
  }

  .bounce-enter-active {
    animation: slideInDown 1s;
  }

  .bounce-leave-active {
    animation: slideOutUp 1s;
  }

</style>
