// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.use(MintUI)

router.beforeEach((to, from, next) => {
  store.state.tabActive = to.matched[0].name;
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  created(){
    this.$http.get('http://route.showapi.com/213-4?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&topid=26')
      .then((res)=>{
          store.state.pageLoading = false
          this.$store.state.playMusicLists=res.data["showapi_res_body"]["pagebean"]["songlist"]
        }
      )
  }
})
