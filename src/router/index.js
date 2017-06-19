import Vue from 'vue'
import Router from 'vue-router'
import discoverMusic from '@/components/discoverMusic'
import myMusic from '@/components/myMusic'
import friends from '@/components/friends'
import account from '@/components/account'
import selfRecommend from '@/components/selfRecommend'
import musicList from '@/components/musicList'
import hostStation from '@/components/hostStation'
import billboard from '@/components/billboard'
import status from '@/components/status'
import nearby from '@/components/nearby'
import detailMusicList from '@/components/detailMusicList'
import playPage from '@/components/play_page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'discoverMusic',
      redirect:'selfRecommend',
      component: discoverMusic,
      children: [
        {
          path: 'selfRecommend',
          name: 'selfRecommend',
          component: selfRecommend,
        },
        {
          path: 'musicList',
          name: 'musicList',
          component: musicList,
        },
        {
          path: 'hostStation',
          name: 'hostStation',
          component: hostStation,
        },
        {
          path: 'billboard',
          name: 'billboard',
          component: billboard,
        }
      ]
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: myMusic
    },
    {
      path: '/friends',
      name: 'friends',
      redirect:'/status',
      component: friends,
      children:[
        {
          path: '/status',
          name: 'status',
          component: status
        },
        {
          path: '/nearby',
          name: 'nearby',
          component: nearby
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/detailMusicList',
      name: 'detailMusicList',
      component: detailMusicList
    },
    {
      path: '/playPage',
      name: 'playPage',
      component: playPage
    }
  ]
})


