<template>
  <div class="header">
    <span class="iconfont icon-iconjiantouleft" @click="back()"></span>
    <span class="mMusic">歌单</span>
    <span class="iconfont icon-gaodiyin"></span>
  </div>
</template>
<script type="text/javascript" charset="utf-8">
  export default{
    methods:{
        back(){
            return this.$router.go(-1)
        }
    }
  }
</script>
<style scoped>
  .header {
    width: 100%;
    height: 1.6rem;
    color: white;
    font-size: 0;
    font-family: "Adobe 黑体 Std R";
    position: fixed;
    z-index: 999;
    background-color: rgba(97, 97, 97, 0.8);
  }

  .iconfont {
    display: inline-block;
    width: 1.6rem;
    text-align: center;
    line-height: 1.6rem;
    font-size: 20px;
  }

  .mMusic {
    display: inline-block;
    width: 6.8rem;
    height: 100%;
    font-size: 16px;
    text-align: center;
    vertical-align: top;
    line-height: 1.6rem;
  }
</style>
