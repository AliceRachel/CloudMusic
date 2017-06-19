/**
 * Created by Administrator on 2017/6/10.
 */
export default {
  currentPlayMusic(state,item){
    clearInterval(state.timerId)
    state.countSecond=0
    state.countMinute=0
    state.rangeValue=0

    state.currentMusic = item
    state.currentMusicMinute=Math.trunc(item.seconds/60)
    state.currentMusicSecond=item.seconds%60
    state.playFunction=function () {
      state.second++
      if (state.countSecond>59){
        state.countSecond=0
        state.countMinute++
      }
      if (state.countMinute==state.currentMusicMinute&&state.countSecond==state.currentMusicSecond){
        state.currentIndex++
      }
      state.countSecond++
      state.countSecond = state.countSecond<10?'0'+state.countSecond:state.countSecond
      state.rangeValue=+(state.second/item.seconds*100)
    }
    state.timerId=setInterval(state.playFunction,1000)
  }
}
