<template>
  <div class="detailMusicList">
    <dml-header></dml-header>
    <div class="content">
      <input type="text" placeholder="搜索歌单内歌曲" v-model="searchedMusic">
      <div class="content_banner">
        <img :src="musicListItem.backgroundUrl" alt="图片">
        <div class="banner_right">
          <p>{{musicListItem.name}}</p>
        </div>
      </div>
      <div class="content_nav">
        <li>
          <span class="iconfont icon-unif056"></span>
          <p>23453</p>
        </li>
        <li>
          <span class="iconfont icon-pinglun"></span>
          <p>123</p>
        </li>
        <li>
          <span class="iconfont icon-zhuanfa"></span>
          <p>343</p>
        </li>
        <li>
          <span class="iconfont icon-xiazai"></span>
          <p>下载</p>
        </li>
      </div>
    </div>
    <div class="play_list">
      <div class="play_head">
        <span class="iconfont icon-bofang"></span>
        <div class="head_right">
          <span class="play_all">播放全部</span><i>(共{{currentMusicList.length}}首)</i>
          <div class="mul_select">
            <span class="iconfont icon-duoxuan"></span>
            <span>多选</span>
          </div>
        </div>
      </div>
      <ul class="music_list">
        <li v-for="(item, index) in filterMusicList" @click="getMusicInfo(item,index)">
          <!--<router-link tag="li" to="/playPage" v-for="(item, index) in filterMusicList"
                       @click.native="getMusicInfo(item,index)">-->
          <span class="num">{{index + 1}}</span>
          <div class="music_info">
            <router-link class="music_info_l" to="/playPage">
              <!--<div class="music_info_l">-->
              <h3>{{item.songname}}</h3>
              <p>{{item.singername}} - {{item.songname}}</p>
              <!--</div>-->
            </router-link>
            <div class="music_info_r">
              <span class="iconfont icon-bofang1"></span>
              <div @click="handleClick(item)" class="detail_key">. . .</div>
              <mt-popup
                v-model="popupVisible"
                position="bottom">
                <ul>
                  <li><span class="underline_item">歌曲：Nobody</span></li>
                  <li><span class="iconfont icon-bofang"></span><span class="underline_item">下一首播放</span></li>
                  <li @click="favorite(currentItem,$event)" :class="{'active':isFavoriteBol}"><span
                    class="iconfont icon-unif056"></span><span
                    class="underline_item">
                  收藏到歌单</span></li>
                  <li><span class="iconfont icon-xiazai"></span><span class="underline_item">下载</span></li>
                  <li><span class="iconfont icon-pinglun"></span><span class="underline_item">评论</span></li>
                  <li><span class="iconfont icon-zhuanfa"></span><span class="underline_item">分享</span></li>
                  <li><span class="iconfont icon-geshou"></span><span class="underline_item">歌手:{{currentItem.singername}}
                </span></li>
                  <li><span class="iconfont icon-zhuanji"></span><span class="underline_item">专辑</span></li>
                </ul>
              </mt-popup>
            </div>
          </div>
          <!--</router-link>-->
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  import dmlHeader from './dml_header'
  import {Popup} from 'mint-ui';
  import MtButton from "../../node_modules/mint-ui/packages/button/src/button";
  export default {
    components: {
      MtButton,
      dmlHeader,
      Popup
    },
    computed: {
      currentMusic(){
        return this.$store.state.currentMusics
      },
      musicListItem(){
        return this.$store.state.musicListItem
      },
      currentMusicList(){
        return this.$store.state.currentMusicList
      },
      filterMusicList(){
        return this.currentMusicList.filter(item => item.songname.indexOf(this.searchedMusic) > -1 || item.singername.indexOf(this.searchedMusic) > -1)
      }
    },
    data(){
      return {
        popupVisible: false,
        searchedMusic: '',
        isFavoriteBol: false,
        currentItem: {}
      }
    },
    methods: {
      handleClick(item) {
        this.currentItem = item
        this.popupVisible = true
      },
      getMusicInfo(item, index){
        this.$store.dispatch('getMusicInfo', {item, index})
      },
      favorite(item, e){
        if (e.currentTarget.tagName === 'LI') {
          let self = this
          this.isFavoriteBol = true
          setTimeout(function () {
            self.isFavoriteBol = false
          }, 1000)
          this.$store.dispatch('favorite', item)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .router_view {
    padding-top: 0;
  }

  .content {
    padding-top: 1.6rem;
    text-align: center;
    background-color: rgba(32, 32, 32, 0.8);
    input {
      width: 9rem;
      background-color: rgba(89, 89, 89, 0.8);
      border-radius: .8rem;
      height: .8rem;
      text-align: center;
      margin-top: .2rem;
      &:focus {
        color: white;
      }
    }
    .content_banner {
      font-size: 0;
      padding: .6rem .6rem .2rem;
      img {
        width: 3rem;
      }
    }
    .banner_right {
      display: inline-block;
      width: 5.8rem;
      font-size: 14px;
      color: rgba(255, 255, 255, .9);
      height: 3rem;
      vertical-align: top;
      p {
        margin-left: .5rem;
        line-height: .6rem;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .content_nav {
      width: 100%;
      height: 1.6rem;
      font-size: 0;
      li {
        display: inline-block;
        width: 25%;
        font-size: 12px;
        margin-top: .4rem;
        p {
          color: #9b9b9b;
          margin-top: .16rem;
        }
      }
      .iconfont {
        color: rgba(255, 255, 255, .9);
      }
    }
  }

  .play_list {
    .play_head {
      width: 100%;
      height: 1.2rem;
      font-size: 0;
    }
    .head_right {
      display: inline-block;
      width: 9rem;
      font-size: 14px;
      height: 100%;
      vertical-align: top;
      line-height: 1.2rem;
      border-bottom: 1px solid rgba(228, 228, 228, .8);
      i {
        font-size: 12px;
        color: grey;
        margin-left: .1rem;
      }
    }
    .icon-bofang {
      width: 1rem;
      display: inline-block;
      text-align: center;
      line-height: 1.2rem;
      font-size: .6rem;
    }
    .play_all {
      font-size: 15px;
    }
    .mul_select {
      float: right;
      margin-right: .4rem;
      font-size: 14px;
    }
    .music_list {
      width: 100%;
      li {
        width: 100%;
        height: 1.4rem;
        font-size: 0;
        display: flex;
        align-items: center;
      }
      .num {
        width: 1rem;
        display: inline-block;
        height: 100%;
        text-align: center;
        vertical-align: top;
        line-height: 1.4rem;
        font-size: 12px;
        color: grey;
      }
      .music_info {
        font-size: 12px;
        width: 9rem;
        height: 100%;
        border-bottom: 1px solid rgba(228, 228, 228, .8);
        display: flex;
        align-items: center;
      }
      .music_info_l {
        display: inline-block;
        width: 60%;
        h3 {
          font-size: 13px;
          font-weight: bold;
          margin-bottom: .1rem;
        }
        p {
          color: grey;
        }
        h3, p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .music_info_r {
        display: inline-block;
        width: 38%;
        vertical-align: top;
        color: grey;
        .icon-bofang1 {
          margin-left: 1.4rem;
        }
      }
    }
    .detail_key {
      display: inline-block;
      margin-left: .4rem;
      vertical-align: top;
    }
    .mint-popup {
      width: 100%;
      li {
        font-size: 12px;
        .iconfont {
          width: 1.2rem;
          height: 100%;
          color: red;
          text-align: center;
          line-height: 1.4rem;
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
        &:nth-of-type(1) {
          width: 100%;
          height: 100%;
          line-height: 1.4rem;
          font-size: 12px;
          color: grey;
        }
      }
    }
  }

  .active {
    background-color: rgba(191, 191, 191, .6);
    transition: all .5s;
  }

</style>
