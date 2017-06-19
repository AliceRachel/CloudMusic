<template>
    <div class="play_page">
        <div class="header">
            <span class="iconfont icon-iconjiantouleft" @click="back()"></span>
            <div class="mMusic">
                <span>{{currentMusic.songname}}</span><br>
                <span>{{currentMusic.singername}}</span>
            </div>
            <span class="iconfont icon-zhuanfa"></span>
        </div>
        <div class="content" @click="changePlayPage">
            <div class="tape" :class="{rotate:rotateBol,stopRotate:!rotateBol}" ref="tape">
                <img class="tape_bc" src="/static/img/tape.jpg" alt="图片">
                <img class="music_pic" :src="currentMusic.albumpic_big" alt="图片">
            </div>
            <div class="lyric-container" ref="lyricContainer">
                <ul class="lyric" ref="lyric">
                    <li v-for="(item,index) in lyricList" :class="{'active-lyric':index==currentIndex}">{{item.zh}}</li>
                </ul>
            </div>
            <mt-range v-model="rangeValue">
                <div slot="start" class="time_num">{{timeText}}</div>
                <div slot="end" class="time_num">{{durationText}}</div>
            </mt-range>

        </div>

        <div class="footer">
            <span class="iconfont icon-suiji"></span>
            <span class="iconfont icon-shangyishou" @click="preMusic"></span>
            <span class="iconfont icon-bofang" @click="playOrStop()"
                  :class="{'icon-bofang':!rotateBol,'icon-zanting':rotateBol}"></span>
            <span class="iconfont icon-xiayishou" @click="nextMusic"></span>
            <span class="iconfont icon-duoxuan" @click="handleClick"></span>
            <mt-popup
                    v-model="popupVisible"
                    position="bottom">
                <ul>
                    <li :class="{'active':isFavoriteBol}" @click="favorite(currentMusic,$event)">
                        <span class="iconfont icon-unif056"></span>
                        <span class="underline_item">收藏到歌单</span>
                    </li>
                    <li><span class="iconfont icon-xiazai"></span><span class="underline_item">下载</span></li>
                    <li><span class="iconfont icon-pinglun"></span><span class="underline_item">评论</span></li>
                </ul>
            </mt-popup>
        </div>
        <audio :src="currentMusic.url" autoplay v-bind:timeupdate="timeupdateEvent"></audio>
    </div>
</template>
<script type="text/javascript" charset="utf-8">
    import {Range} from 'mint-ui';
    import {Popup} from 'mint-ui';
    export default{
        watch: {
            'songid': {
                handler: function (val) {
                    if (val) {
                        this.getLyrics(val)
                    }
                },
                dep: true
            },
        },
        computed: {
            songid(){
                return this.$store.state.currentMusic.songid
            },
            currentMusic(){
                return this.$store.state.currentMusic
            },
            currentMusicMinute(){
                return this.$store.state.currentMusicMinute
            },
            currentMusicSecond(){
                return this.$store.state.currentMusicSecond
            },
            countMinute(){
                return this.$store.state.countMinute
            },
            countSecond(){
                return this.$store.state.countSecond
            },
            rangeValue(){
                this.timeupdateEvent();
                return this.$store.state.rangeValue
            }
        },
        methods: {
            getLyrics(val){
                var that = this;
                this.ly = "";
                this.$http.get('http://route.showapi.com/213-2?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&musicid=' + val)
                    .then(function (res) {
                        var json = res.data;
                        var arrData = json["showapi_res_body"];

                        function strNumDiscode(str) {
                            str = str.replace(/&#58;/g, ':');
                            str = str.replace(/&#46;/g, '.');
                            str = str.replace(/&#32;/g, ' ');
                            str = str.replace(/&#10;/g, '\n');
                            str = str.replace(/&#45;/g, '-');
                            return str;
                        }

                        that.ly = strNumDiscode(arrData.lyric);

                        var ob = {
                            zh: that.ly
                        };
                        that.lyricList = that.getLyricList(ob)
                    })
            },
            getLyricList: function getLyricList(song) {
                var strRe = /\[(\d{2}:\d{2})\.\d{2,}\](.*)/;
                var obj = {},
                    lyricList = [],
                    zh = song.zh ? song.zh.split('\n') : [],
                    en = song.en ? song.en.split('\n') : [];

                zh.forEach(function (str) {
                    var arr = str.match(strRe);
                    if (!arr) return;

                    var k = arr[1],
                        v = arr[2] || '(music)';

                    if (!obj[k]) obj[k] = {};
                    obj[k].zh = v;
                });
                if (en.length) {
                    this.isEnSong = true;
                } else {
                    this.isEnSong = false;
                }

                en.forEach(function (str) {
                    var arr = str.match(strRe);
                    if (!arr) return;

                    var k = arr[1],
                        v = arr[2] || '(music)';

                    if (!obj[k]) obj[k] = {};
                    obj[k].en = v;
                });

                for (var t in obj) {
                    var ts = t.split(':');
                    var time = parseInt(ts[0]) * 60 + parseInt(ts[1]);

                    if (lyricList.length) {
                        lyricList[lyricList.length - 1].endtime = time;
                    }

                    lyricList.push({
                        time: time,
                        zh: obj[t].zh,
                        en: obj[t].en
                    });
                }

                return lyricList;
            },
            timeupdateEvent: function () {
                var t = this.countMinute * 60 + parseInt(this.countSecond),
                    d = this.$store.state.currentMusic.seconds,
                    step = this.isEnSong ? 32 : 32,
                    list = this.lyricList,
                    cIndex = this.currentIndex;
                var lyricContent = this.$refs.lyric
                if (cIndex < list.length - 1 && t >= list[cIndex + 1].time) {
                    lyricContent.style.top = 150 - step * (cIndex + 1) + 'px'
                    this.currentTime = t
                    this.currentIndex = cIndex + 1
                }

                this.timeText = this.formatTime(t)
                this.durationText = this.formatTime(d)
            },
            formatTime: function (time) {
                time = Math.floor(time);
                var m = Math.floor(time / 60).toString();
                m = m.length < 2 ? '0' + m : m;

                var s = (time - parseInt(m) * 60).toString();
                s = s.length < 2 ? '0' + s : s;

                return `${m}:${s}`;
            },
            favorite(currentMusic, e){
                if (e.currentTarget.tagName === 'LI') {
                    let self = this
                    this.isFavoriteBol = true
                    setTimeout(function () {
                        self.isFavoriteBol = false
                    }, 1000)
                    this.$store.dispatch('favorite', currentMusic)
                }
            },
            back(){
                clearInterval(this.$store.state.timerId)
                this.init()
                this.$router.go(-1)
            },
            playOrStop(){
                var audio = document.querySelector('audio')
                this.rotateBol = !this.rotateBol
                if (audio.paused) {
                    audio.play()
                    this.$store.state.timerId = setInterval(this.$store.state.playFunction, 1000)
                } else {
                    audio.pause()
                    clearInterval(this.$store.state.timerId)
                }
            },
            preMusic(){
                clearInterval(this.$store.state.timerId)
                this.init()
                this.$store.dispatch('preMusic')
            },
            nextMusic(){
                clearInterval(this.$store.state.timerId)
                this.init()
                this.$store.dispatch('nextMusic')
            },
            init(){
                var lyricContent = this.$refs.lyric
                this.$store.state.countSecond = 0
                this.$store.state.countMinute = 0
                this.$store.state.rangeValue = 0
                this.$store.state.second = 0
                this.$store.state.timerId = setInterval(this.$store.state.playFunction, 1000)
                this.currentIndex = -1
                lyricContent.style.top = '150px';
            },
            handleClick() {
                this.popupVisible = true
            },
            changePlayPage(){
                this.pageBol=!this.pageBol
                if (this.pageBol){
                    this.$refs.tape.style.display='block'
                    this.$refs.lyricContainer.style.display='none'
                }else{
                    this.$refs.tape.style.display='none'
                    this.$refs.lyricContainer.style.display='block'
                }
            }
        },
        data(){
            return {
                rotateBol: true,
                popupVisible: false,
                isFavoriteBol: false,
                currentLyrics: [],
                lyricList: [],
                currentIndex: -1,
                status: 'play',
                timeText: '00:00',
                durationText: '',
                currentTime: '0',
                per: 0,
                pageBol:false
            }
        },
        components: {
            Range,
            Popup
        }
    }
</script>
<style lang="scss">
    .play_page {
        width: 100%;
        background-color: rgba(151, 151, 151, .8);
        .header {
            width: 100%;
            height: 1.6rem;
            color: white;
            font-size: 0;
            font-family: "Adobe 黑体 Std R";
            border-bottom: 1px solid rgba(255, 255, 255, .1);
            z-index: 999;
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            .iconfont {
                font-size: .8rem;
                display: inline-block;
                width: 1.6rem;
                text-align: center;
            }
            .mMusic {
                font-size: 14px;
                display: inline-block;
                width: 6.8rem;
                height: 100%;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                span:nth-of-type(1) {
                    margin-top: .3rem;
                    display: inline-block;
                }
                span:nth-of-type(2) {
                    margin-top: .2rem;
                    display: inline-block;
                }
            }
        }
        .content {
            height: 13rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .tape {
                position: relative;
                .tape_bc {
                    border-radius: 50%;
                    border: 10px solid rgba(255, 255, 255, .1);
                }
            }
            .music_pic {
                position: absolute;
                top: 0;
                left: 0;
                width: 4.4rem;
                border-radius: 50%;
                bottom: 0;
                right: 0;
                margin: auto;
            }
            .time_num {
                color: rgba(255, 255, 255, .8);
                margin: 0 .3rem;
            }
            .mt-range {
                position: absolute;
                bottom: 2rem;
                width: 9rem;
                .mt-range-runway {
                    background-color: grey;
                }
                .mt-range-thumb {
                    width: .4rem;
                    height: .4rem;
                    top: .24rem;
                }
            }
        }
        .lyric-container {
            position: relative;
            height: 13rem;
            overflow: scroll;
            width: 100%;
            display: none;
            .lyric {
                top: 100px;
                position: relative;
                li {
                    width: 100%;
                    text-align: center;
                    color: white;
                    height: 1rem;
                    line-height: 1rem;
                    font-size: 14px;
                    &.active-lyric {
                        color: #ca3cdd;
                        transition: all 1s ease-in;
                    }
                }
            }
        }
        .footer {
            position: absolute;
            bottom: 0;
            background-color: rgba(151, 151, 151, .8);
            width: 100%;
            height: 1.6rem;
            color: rgba(255, 255, 255, .8);
            display: flex;
            justify-content: space-around;
            align-items: center;
            span {
                display: inline-block;
                font-size: .6rem;
            }
            .icon-bofang {
                font-size: .9rem;
                margin-bottom: .1rem;
            }
            > .mint-popup {
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

        .rotate {
            animation: rotate 4s infinite linear running forwards;
        }
        .stopRotate {
            animation: rotate 4s infinite linear paused forwards;
        }
        @keyframes rotate {
            from {

            }
            to {
                transform: rotate(360deg);
            }
        }
    }
</style>
