<template>
  <div class="loading">
    <img src="../../static/img/loading.gif" alt="图片">
  </div>
</template>

<style scoped>
  .loading {
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,.6);
    position: absolute;
    z-index: 1000;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
