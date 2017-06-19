/**
 * Created by Administrator on 2017/6/10.
 */
export default {
  getMusicList({commit},{item,index}){
    commit('GET_MUSIC_LIST',{item,index})
  },
  getMusicInfo({commit},{item,index}){
    commit('GET_MUSIC_INFO',{item,index})
  },
  preMusic({commit}){
    commit('PRE_MUSIC')
  },
  nextMusic({commit}){
    commit('NEXT_MUSIC')
  },
  chooseMusic({commit},item){
    commit('CHOOSE_MUSIC',item)
  },
  favorite({commit},currentMusic){
    commit('FAVORITE',currentMusic)
  },
  goToFavoriteList({commit}){
    commit('GO_TO_FAVORITE_LIST')
  }
}
