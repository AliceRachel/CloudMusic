<template>
  <div class="self_recommend">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgs" :key="item.img">
          <img :src="item.img" alt="图片">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="self_nav">
      <li class="nav_wrap">
        <router-link tag="li" class="nav_item" to="">
          <span class="iconfont icon-shouyinji01"></span>
          <p>私人FM</p>
        </router-link>
      </li>
      <li class="nav_wrap">
        <router-link tag="li" class="nav_item" to="">
          <span class="iconfont icon-calendar"></span>
          <p>每日歌曲推荐</p>
        </router-link>
      </li>
      <li class="nav_wrap">
        <router-link tag="li" class="nav_item" to="">
          <span class="iconfont icon-paihangbang"></span>
          <p>云音乐热歌榜</p>
        </router-link>
      </li>
    </ul>
    <div class="recom_music_list">
      <div class="header recom_header">
        <router-link to="musicList" class="recom_nav">推荐歌单</router-link><span class="iconfont icon-arrow-right"></span>
      </div>
      <ul class="recom_cont">
        <router-link tag="li" v-for="(item,index) in commendLists" to="/detailMusicList"
                     @click.native="getMusicList(item,index)" :key="item.name">
          <img :src="item.backgroundUrl" alt="图片">
          <p class="rec_des">{{item.name}}</p>
          <span class="iconfont icon-shiliangzhinengduixiang1">{{item.playcount}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  import {Swipe, SwipeItem} from 'mint-ui';
  var {commendList} = require('../../static/commend-list')
  console.log(commendList)
  var imgs = [
      {img: 'http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg'},
      {img: 'http://p4.music.126.net/j_cH-yjz5tTLIDFmz4sSiQ==/18833534674063637.jpg'},
      {img: 'http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg'},
      {img: 'http://p3.music.126.net/tw17cN9NJfa5FmFDyS0A_g==/18624627464801294.jpg'},
      {img: 'http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg'},
      {img: 'http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg'},
      {img: 'http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg'},
      {img: 'http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg'}
    ]

  export default{
    name: 'selfRecommend',
    components: {
      Swipe,
      SwipeItem
    },
    data(){
      return {
          imgs,
        commendList:commendList.commendList
      }
    },
    computed:{
      commendLists(){
          for (var i=0;i<this.commendList.length;i++){
            if (+this.commendList[i].playcount>99999){
              this.commendList[i].playcount=this.commendList[i].playcount.slice(0,2)+'万'
              }
          }
          return this.commendList
      }
    },
    methods:{
      getMusicList(item,index){
          return this.$store.dispatch('getMusicList',{item,index})
      }
    }
  }

</script>
<style scoped lang="scss">
  .swiper {
    width: 100%;
    height: 4rem;
  }

  .swiper img {
    width: 100%;
  }

  .self_nav {
    width: 100%;
    height: 3rem;
    border-bottom: 1px solid lightgrey;
    font-size: 0;
    .nav_wrap {
      display: inline-block;
      width: 33.333%;
      height: 100%;
      font-size: 12px;
      text-align: center;
      position: relative;
      p {
        margin-top: .2rem;
      }
    }
    .nav_item{
      width:3rem ;
      height: 2.3rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    .iconfont {
      display: inline-block;
      border: 1px solid red;
      font-size: 1rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      line-height: 1.6rem;
      color: #d3181e;
    }
  }

  .recom_music_list{
    .recom_nav{
      padding-left: .2rem;
      border-left: 3px solid red;
    }
    .iconfont{
      margin-left: .2rem;
    }
    .recom_cont{
      li{
        width: 32.6%;
        display: inline-block;
        margin-bottom: .4rem;
        position: relative;
        &:nth-of-type(3n+2){
          margin: 0 1.1%;
        }
        img{
          width: 100%;
        }
        .iconfont{
          position: absolute;
          color: white;
          font-size: .12rem;
          right: .2rem;
          top: .1rem;
        }
      }
      .rec_des{
        font-size: 12px;
        width: 90%;
        height: .8rem;
        text-align: center;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
  .header{
    width: 100%;
    height: 1.2rem;
    font-size: 14px;
    line-height: 1.2rem;
  }

</style>
