/**
 * Created by Administrator on 2017/6/10.
 */
import getters from './getters'
export default {
  GET_MUSIC_LIST(state,{item,index}){
    state.musicListItem=item
    state.currentMusicList=state.playMusicLists.slice(index*30,index*30+31)
  },
  GET_MUSIC_INFO(state,{item,index}){
    state.currentIndex=index
    getters.currentPlayMusic(state,item)
  },
  PRE_MUSIC(state){
      state.currentIndex--
      if (state.currentIndex<0){
        state.currentIndex=0
    }
    state.currentMusic=state.currentMusicList[state.currentIndex]
  },
  NEXT_MUSIC(state){
      state.currentIndex++
      if (state.currentIndex>=state.currentMusicList.length){
          state.currentIndex=state.currentMusicList.length-1
      }
    state.currentMusic=state.currentMusicList[state.currentIndex]
  },
  CHOOSE_MUSIC(state,item){
    getters.currentPlayMusic(state,item)
  },
  FAVORITE(state,item){
    console.log(item);
    state.favoriteMusic.push(item)
  },
  GO_TO_FAVORITE_LIST(state){
    state.currentMusicList=state.favoriteMusic
  }
}
