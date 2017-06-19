webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Administrator on 2017/6/10.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  currentPlayMusic(state, item) {
    clearInterval(state.timerId);
    state.countSecond = 0;
    state.countMinute = 0;
    state.rangeValue = 0;

    state.currentMusic = item;
    state.currentMusicMinute = Math.trunc(item.seconds / 60);
    state.currentMusicSecond = item.seconds % 60;
    state.playFunction = function () {
      state.second++;
      if (state.countSecond > 59) {
        state.countSecond = 0;
        state.countMinute++;
      }
      if (state.countMinute == state.currentMusicMinute && state.countSecond == state.currentMusicSecond) {
        state.currentIndex++;
      }
      state.countSecond++;
      state.countSecond = state.countSecond < 10 ? '0' + state.countSecond : state.countSecond;
      state.rangeValue = +(state.second / item.seconds * 100);
    };
    state.timerId = setInterval(state.playFunction, 1000);
  }
});

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_discoverMusic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_discoverMusic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_discoverMusic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_myMusic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_myMusic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_myMusic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_friends__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_friends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_friends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_account__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_account___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_account__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_selfRecommend__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_selfRecommend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_selfRecommend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_musicList__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_musicList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_musicList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hostStation__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_hostStation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_hostStation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_billboard__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_billboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_billboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_status__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_status___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_status__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nearby__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nearby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_nearby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_detailMusicList__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_detailMusicList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_detailMusicList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_play_page__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_play_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_play_page__);















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'discoverMusic',
    redirect: 'selfRecommend',
    component: __WEBPACK_IMPORTED_MODULE_2__components_discoverMusic___default.a,
    children: [{
      path: 'selfRecommend',
      name: 'selfRecommend',
      component: __WEBPACK_IMPORTED_MODULE_6__components_selfRecommend___default.a
    }, {
      path: 'musicList',
      name: 'musicList',
      component: __WEBPACK_IMPORTED_MODULE_7__components_musicList___default.a
    }, {
      path: 'hostStation',
      name: 'hostStation',
      component: __WEBPACK_IMPORTED_MODULE_8__components_hostStation___default.a
    }, {
      path: 'billboard',
      name: 'billboard',
      component: __WEBPACK_IMPORTED_MODULE_9__components_billboard___default.a
    }]
  }, {
    path: '/myMusic',
    name: 'myMusic',
    component: __WEBPACK_IMPORTED_MODULE_3__components_myMusic___default.a
  }, {
    path: '/friends',
    name: 'friends',
    redirect: '/status',
    component: __WEBPACK_IMPORTED_MODULE_4__components_friends___default.a,
    children: [{
      path: '/status',
      name: 'status',
      component: __WEBPACK_IMPORTED_MODULE_10__components_status___default.a
    }, {
      path: '/nearby',
      name: 'nearby',
      component: __WEBPACK_IMPORTED_MODULE_11__components_nearby___default.a
    }]
  }, {
    path: '/account',
    name: 'account',
    component: __WEBPACK_IMPORTED_MODULE_5__components_account___default.a
  }, {
    path: '/detailMusicList',
    name: 'detailMusicList',
    component: __WEBPACK_IMPORTED_MODULE_12__components_detailMusicList___default.a
  }, {
    path: '/playPage',
    name: 'playPage',
    component: __WEBPACK_IMPORTED_MODULE_13__components_play_page___default.a
  }]
}));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutations__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(10);
/**
 * Created by Administrator on 2017/6/10.
 */







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
    mutations: __WEBPACK_IMPORTED_MODULE_3__mutations__["a" /* default */],
    actions: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* default */],
    getters: __WEBPACK_IMPORTED_MODULE_5__getters__["a" /* default */]
}));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(64)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(112),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-53f7ec38",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

if (false) {
  require('mint-ui/packages/font/style.css');
}

/**
 * mt-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mt-button',

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },

  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'danger', 'primary'].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['small', 'normal', 'large'].indexOf(value) > -1;
      }
    }
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BtmTabBar__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_BtmTabBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_BtmTabBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_loading__);
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    BtmTabBar: __WEBPACK_IMPORTED_MODULE_0__components_BtmTabBar___default.a,
    HeaderBar: __WEBPACK_IMPORTED_MODULE_1__components_header___default.a,
    loading: __WEBPACK_IMPORTED_MODULE_2__components_loading___default.a
  },
  computed: {
    tabActive() {
      return this.$store.state.tabActive;
    },
    pageLoading() {
      return this.$store.state.pageLoading;
    }
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BtmTabBar',
  computed: {
    tabActive() {
      return this.$store.state.tabActive;
    }
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'billboard'
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dml_header__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dml_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dml_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_mint_ui_packages_button_src_button__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_mint_ui_packages_button_src_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_mint_ui_packages_button_src_button__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MtButton: __WEBPACK_IMPORTED_MODULE_2__node_modules_mint_ui_packages_button_src_button___default.a,
    dmlHeader: __WEBPACK_IMPORTED_MODULE_0__dml_header___default.a,
    Popup: __WEBPACK_IMPORTED_MODULE_1_mint_ui__["Popup"]
  },
  computed: {
    currentMusic() {
      return this.$store.state.currentMusics;
    },
    musicListItem() {
      return this.$store.state.musicListItem;
    },
    currentMusicList() {
      return this.$store.state.currentMusicList;
    },
    filterMusicList() {
      return this.currentMusicList.filter(item => item.songname.indexOf(this.searchedMusic) > -1 || item.singername.indexOf(this.searchedMusic) > -1);
    }
  },
  data() {
    return {
      popupVisible: false,
      searchedMusic: '',
      isFavoriteBol: false,
      currentItem: {}
    };
  },
  methods: {
    handleClick(item) {
      this.currentItem = item;
      this.popupVisible = true;
    },
    getMusicInfo(item, index) {
      this.$store.dispatch('getMusicInfo', { item, index });
    },
    favorite(item, e) {
      if (e.currentTarget.tagName === 'LI') {
        let self = this;
        this.isFavoriteBol = true;
        setTimeout(function () {
          self.isFavoriteBol = false;
        }, 1000);
        this.$store.dispatch('favorite', item);
      }
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'discoverMenu',
  computed: {}
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discoverMenu__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__discoverMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__discoverMenu__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'discoverMusic',
  components: {
    discoverMenu: __WEBPACK_IMPORTED_MODULE_0__discoverMenu___default.a
  }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    musicList() {
      return this.$store.state.playMusicLists;
    },
    foundedMusicList() {
      return this.musicList.filter(item => item.songname.indexOf(this.searchWord) > -1 || item.singername.indexOf(this.searchWord) > -1);
    }
  },
  data() {
    return {
      searchWord: ''
    };
  },
  methods: {
    chooseMusic(item) {
      return this.$store.dispatch('chooseMusic', item);
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        back() {
            return this.$router.go(-1);
        }
    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {}
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dm_header__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dm_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dm_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mm_header__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mm_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mm_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fri_header__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fri_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__fri_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accout_header__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accout_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__accout_header__);
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    tabActive() {
      return this.$store.state.tabActive;
    }
  },
  components: {
    dmHeader: __WEBPACK_IMPORTED_MODULE_0__dm_header___default.a,
    mmHeader: __WEBPACK_IMPORTED_MODULE_1__mm_header___default.a,
    friHeader: __WEBPACK_IMPORTED_MODULE_2__fri_header___default.a,
    accoutHeader: __WEBPACK_IMPORTED_MODULE_3__accout_header___default.a
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hostStation'
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'musicList'
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    favoriteMusic() {
      return this.$store.state.favoriteMusic;
    }
  },
  methods: {
    goToFavoriteList() {
      return this.$store.dispatch('goToFavoriteList');
    }
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    watch: {
        'songid': {
            handler: function (val) {
                if (val) {
                    this.getLyrics(val);
                }
            },
            dep: true
        }
    },
    computed: {
        songid() {
            return this.$store.state.currentMusic.songid;
        },
        currentMusic() {
            return this.$store.state.currentMusic;
        },
        currentMusicMinute() {
            return this.$store.state.currentMusicMinute;
        },
        currentMusicSecond() {
            return this.$store.state.currentMusicSecond;
        },
        countMinute() {
            return this.$store.state.countMinute;
        },
        countSecond() {
            return this.$store.state.countSecond;
        },
        rangeValue() {
            this.timeupdateEvent();
            return this.$store.state.rangeValue;
        }
    },
    methods: {
        getLyrics(val) {
            var that = this;
            this.ly = "";
            this.$http.get('http://route.showapi.com/213-2?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&musicid=' + val).then(function (res) {
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
                that.lyricList = that.getLyricList(ob);
            });
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
            var lyricContent = this.$refs.lyric;
            if (cIndex < list.length - 1 && t >= list[cIndex + 1].time) {
                lyricContent.style.top = 150 - step * (cIndex + 1) + 'px';
                this.currentTime = t;
                this.currentIndex = cIndex + 1;
            }

            this.timeText = this.formatTime(t);
            this.durationText = this.formatTime(d);
        },
        formatTime: function (time) {
            time = Math.floor(time);
            var m = Math.floor(time / 60).toString();
            m = m.length < 2 ? '0' + m : m;

            var s = (time - parseInt(m) * 60).toString();
            s = s.length < 2 ? '0' + s : s;

            return `${m}:${s}`;
        },
        favorite(currentMusic, e) {
            if (e.currentTarget.tagName === 'LI') {
                let self = this;
                this.isFavoriteBol = true;
                setTimeout(function () {
                    self.isFavoriteBol = false;
                }, 1000);
                this.$store.dispatch('favorite', currentMusic);
            }
        },
        back() {
            clearInterval(this.$store.state.timerId);
            this.init();
            this.$router.go(-1);
        },
        playOrStop() {
            var audio = document.querySelector('audio');
            this.rotateBol = !this.rotateBol;
            if (audio.paused) {
                audio.play();
                this.$store.state.timerId = setInterval(this.$store.state.playFunction, 1000);
            } else {
                audio.pause();
                clearInterval(this.$store.state.timerId);
            }
        },
        preMusic() {
            clearInterval(this.$store.state.timerId);
            this.init();
            this.$store.dispatch('preMusic');
        },
        nextMusic() {
            clearInterval(this.$store.state.timerId);
            this.init();
            this.$store.dispatch('nextMusic');
        },
        init() {
            var lyricContent = this.$refs.lyric;
            this.$store.state.countSecond = 0;
            this.$store.state.countMinute = 0;
            this.$store.state.rangeValue = 0;
            this.$store.state.second = 0;
            this.$store.state.timerId = setInterval(this.$store.state.playFunction, 1000);
            this.currentIndex = -1;
            lyricContent.style.top = '150px';
        },
        handleClick() {
            this.popupVisible = true;
        },
        changePlayPage() {
            this.pageBol = !this.pageBol;
            if (this.pageBol) {
                this.$refs.tape.style.display = 'block';
                this.$refs.lyricContainer.style.display = 'none';
            } else {
                this.$refs.tape.style.display = 'none';
                this.$refs.lyricContainer.style.display = 'block';
            }
        }
    },
    data() {
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
            pageBol: false
        };
    },
    components: {
        Range: __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Range"],
        Popup: __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Popup"]
    }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mint_ui__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var imgs = [{ img: 'http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg' }, { img: 'http://p4.music.126.net/j_cH-yjz5tTLIDFmz4sSiQ==/18833534674063637.jpg' }, { img: 'http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg' }, { img: 'http://p3.music.126.net/tw17cN9NJfa5FmFDyS0A_g==/18624627464801294.jpg' }, { img: 'http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg' }, { img: 'http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg' }, { img: 'http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg' }, { img: 'http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg' }];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'selfRecommend',
  components: {
    Swipe: __WEBPACK_IMPORTED_MODULE_0_mint_ui__["Swipe"],
    SwipeItem: __WEBPACK_IMPORTED_MODULE_0_mint_ui__["SwipeItem"]
  },
  data() {
    return {
      imgs,
      commendList: []
    };
  },
  created() {
    this.$http.get('http://oyhfe.com:666/commend-list').then(data => this.commendList = data.data.commendList.commendList);
  },
  computed: {
    commendLists() {
      for (var i = 0; i < this.commendList.length; i++) {
        if (+this.commendList[i].playcount > 99999) {
          this.commendList[i].playcount = this.commendList[i].playcount.slice(0, 2) + '万';
        }
      }
      return this.commendList;
    }
  },
  methods: {
    getMusicList(item, index) {
      return this.$store.dispatch('getMusicList', { item, index });
    }
  }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mint_ui__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mint_ui_lib_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$http = __WEBPACK_IMPORTED_MODULE_6_axios___default.a;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_mint_ui___default.a);

__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].state.tabActive = to.matched[0].name;
  next();
});

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },
  created() {
    this.$http.get('http://route.showapi.com/213-4?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&topid=26').then(res => {
      __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].state.pageLoading = false;
      this.$store.state.playMusicLists = res.data["showapi_res_body"]["pagebean"]["songlist"];
    });
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Administrator on 2017/6/10.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  getMusicList({ commit }, { item, index }) {
    commit('GET_MUSIC_LIST', { item, index });
  },
  getMusicInfo({ commit }, { item, index }) {
    commit('GET_MUSIC_INFO', { item, index });
  },
  preMusic({ commit }) {
    commit('PRE_MUSIC');
  },
  nextMusic({ commit }) {
    commit('NEXT_MUSIC');
  },
  chooseMusic({ commit }, item) {
    commit('CHOOSE_MUSIC', item);
  },
  favorite({ commit }, currentMusic) {
    commit('FAVORITE', currentMusic);
  },
  goToFavoriteList({ commit }) {
    commit('GO_TO_FAVORITE_LIST');
  }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getters__ = __webpack_require__(10);
/**
 * Created by Administrator on 2017/6/10.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  GET_MUSIC_LIST(state, { item, index }) {
    state.musicListItem = item;
    state.currentMusicList = state.playMusicLists.slice(index * 30, index * 30 + 31);
  },
  GET_MUSIC_INFO(state, { item, index }) {
    state.currentIndex = index;
    __WEBPACK_IMPORTED_MODULE_0__getters__["a" /* default */].currentPlayMusic(state, item);
  },
  PRE_MUSIC(state) {
    state.currentIndex--;
    if (state.currentIndex < 0) {
      state.currentIndex = 0;
    }
    state.currentMusic = state.currentMusicList[state.currentIndex];
  },
  NEXT_MUSIC(state) {
    state.currentIndex++;
    if (state.currentIndex >= state.currentMusicList.length) {
      state.currentIndex = state.currentMusicList.length - 1;
    }
    state.currentMusic = state.currentMusicList[state.currentIndex];
  },
  CHOOSE_MUSIC(state, item) {
    __WEBPACK_IMPORTED_MODULE_0__getters__["a" /* default */].currentPlayMusic(state, item);
  },
  FAVORITE(state, item) {
    console.log(item);
    state.favoriteMusic.push(item);
  },
  GO_TO_FAVORITE_LIST(state) {
    state.currentMusicList = state.favoriteMusic;
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by Administrator on 2017/6/10.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  tabActive: 'discoverMusic',
  musicListItem: {},
  playMusicLists: [],
  currentMusicList: [],
  currentMusic: {},
  currentIndex: 0,
  preMusic: {},
  nextMusic: {},
  currentMusicMinute: 0,
  currentMusicSecond: 0,
  countMinute: 0,
  countSecond: 0,
  rangeValue: 0,
  timerId: '',
  playFunction: '',
  favoriteMusic: [],
  pageLoading: true,
  second: 0
});

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(66)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(114),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(54)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(102),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-07a6b2cd",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(58)
}
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(106),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(72)
}
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(122),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-735c815a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(60)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(108),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(71)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(121),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-70dd0a06",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(113),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-560b5ba4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(61)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(109),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3f7bdea0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(68)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(118),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6704ea77",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(111),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-50665885",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(74)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(124),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-b4c7c7aa",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(62)
}
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(110),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(70)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(120),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6fd02c6e",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(73)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(123),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(107),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2dc2d1a0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(69)
}
var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(119),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6cbfb600",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(103),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(117),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-61babb4d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(116),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(104),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(57)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-23c22dc4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(115),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btm_tab_bar"
  }, [_c('ul', [_c('router-link', {
    class: {
      active: _vm.tabActive == 'discoverMusic' || _vm.tabActive == 'detailMusicList'
    },
    attrs: {
      "tag": "li",
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "iconfont icon-wangyiyunyinlezizhi-copy"
  }), _vm._v(" "), _c('p', [_vm._v("发现音乐")])]), _vm._v(" "), _c('router-link', {
    class: {
      active: _vm.tabActive == 'myMusic'
    },
    attrs: {
      "tag": "li",
      "to": "/myMusic"
    }
  }, [_c('span', {
    staticClass: "iconfont icon-yinle"
  }), _vm._v(" "), _c('p', [_vm._v("我的音乐")])]), _vm._v(" "), _c('router-link', {
    class: {
      active: _vm.tabActive == 'friends'
    },
    attrs: {
      "tag": "li",
      "to": "/friends"
    }
  }, [_c('span', {
    staticClass: "iconfont icon-pengyou"
  }), _vm._v(" "), _c('p', [_vm._v("朋友")])]), _vm._v(" "), _c('router-link', {
    class: {
      active: _vm.tabActive == 'account'
    },
    attrs: {
      "tag": "li",
      "to": "/account"
    }
  }, [_c('span', {
    staticClass: "iconfont icon-zhanghao"
  }), _vm._v(" "), _c('p', [_vm._v("账号")])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "discover_music"
  }, [_vm._v("\n  歌单\n")])
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "play_page"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('span', {
    staticClass: "iconfont icon-iconjiantouleft",
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mMusic"
  }, [_c('span', [_vm._v(_vm._s(_vm.currentMusic.songname))]), _c('br'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.currentMusic.singername))])]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-zhuanfa"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content",
    on: {
      "click": _vm.changePlayPage
    }
  }, [_c('div', {
    ref: "tape",
    staticClass: "tape",
    class: {
      rotate: _vm.rotateBol, stopRotate: !_vm.rotateBol
    }
  }, [_c('img', {
    staticClass: "tape_bc",
    attrs: {
      "src": "/static/img/tape.jpg",
      "alt": "图片"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "music_pic",
    attrs: {
      "src": _vm.currentMusic.albumpic_big,
      "alt": "图片"
    }
  })]), _vm._v(" "), _c('div', {
    ref: "lyricContainer",
    staticClass: "lyric-container"
  }, [_c('ul', {
    ref: "lyric",
    staticClass: "lyric"
  }, _vm._l((_vm.lyricList), function(item, index) {
    return _c('li', {
      class: {
        'active-lyric': index == _vm.currentIndex
      }
    }, [_vm._v(_vm._s(item.zh))])
  }))]), _vm._v(" "), _c('mt-range', {
    model: {
      value: (_vm.rangeValue),
      callback: function($$v) {
        _vm.rangeValue = $$v
      },
      expression: "rangeValue"
    }
  }, [_c('div', {
    staticClass: "time_num",
    slot: "start"
  }, [_vm._v(_vm._s(_vm.timeText))]), _vm._v(" "), _c('div', {
    staticClass: "time_num",
    slot: "end"
  }, [_vm._v(_vm._s(_vm.durationText))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('span', {
    staticClass: "iconfont icon-suiji"
  }), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-shangyishou",
    on: {
      "click": _vm.preMusic
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-bofang",
    class: {
      'icon-bofang': !_vm.rotateBol, 'icon-zanting': _vm.rotateBol
    },
    on: {
      "click": function($event) {
        _vm.playOrStop()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-xiayishou",
    on: {
      "click": _vm.nextMusic
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-duoxuan",
    on: {
      "click": _vm.handleClick
    }
  }), _vm._v(" "), _c('mt-popup', {
    attrs: {
      "position": "bottom"
    },
    model: {
      value: (_vm.popupVisible),
      callback: function($$v) {
        _vm.popupVisible = $$v
      },
      expression: "popupVisible"
    }
  }, [_c('ul', [_c('li', {
    class: {
      'active': _vm.isFavoriteBol
    },
    on: {
      "click": function($event) {
        _vm.favorite(_vm.currentMusic, $event)
      }
    }
  }, [_c('span', {
    staticClass: "iconfont icon-unif056"
  }), _vm._v(" "), _c('span', {
    staticClass: "underline_item"
  }, [_vm._v("收藏到歌单")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "iconfont icon-xiazai"
  }), _c('span', {
    staticClass: "underline_item"
  }, [_vm._v("下载")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "iconfont icon-pinglun"
  }), _c('span', {
    staticClass: "underline_item"
  }, [_vm._v("评论")])])])])], 1), _vm._v(" "), _c('audio', {
    attrs: {
      "src": _vm.currentMusic.url,
      "autoplay": "",
      "timeupdate": _vm.timeupdateEvent
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "self_recommend"
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('mt-swipe', {
    attrs: {
      "auto": 4000
    }
  }, _vm._l((_vm.imgs), function(item) {
    return _c('mt-swipe-item', {
      key: item.img
    }, [_c('img', {
      attrs: {
        "src": item.img,
        "alt": "图片"
      }
    })])
  }))], 1), _vm._v(" "), _c('ul', {
    staticClass: "self_nav"
  }, [_c('li', {
    staticClass: "nav_wrap"
  }, [_c('router-link', {
    staticClass: "nav_item",
    attrs: {
      "tag": "li",
      "to": ""
    }
  }, [_c('span', {
    staticClass: "iconfont icon-shouyinji01"
  }), _vm._v(" "), _c('p', [_vm._v("私人FM")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav_wrap"
  }, [_c('router-link', {
    staticClass: "nav_item",
    attrs: {
      "tag": "li",
      "to": ""
    }
  }, [_c('span', {
    staticClass: "iconfont icon-calendar"
  }), _vm._v(" "), _c('p', [_vm._v("每日歌曲推荐")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "nav_wrap"
  }, [_c('router-link', {
    staticClass: "nav_item",
    attrs: {
      "tag": "li",
      "to": ""
    }
  }, [_c('span', {
    staticClass: "iconfont icon-paihangbang"
  }), _vm._v(" "), _c('p', [_vm._v("云音乐热歌榜")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "recom_music_list"
  }, [_c('div', {
    staticClass: "header recom_header"
  }, [_c('router-link', {
    staticClass: "recom_nav",
    attrs: {
      "to": "musicList"
    }
  }, [_vm._v("推荐歌单")]), _c('span', {
    staticClass: "iconfont icon-arrow-right"
  })], 1), _vm._v(" "), _c('ul', {
    staticClass: "recom_cont"
  }, _vm._l((_vm.commendLists), function(item, index) {
    return _c('router-link', {
      key: item.name,
      attrs: {
        "tag": "li",
        "to": "/detailMusicList"
      },
      nativeOn: {
        "click": function($event) {
          _vm.getMusicList(item, index)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.backgroundUrl,
        "alt": "图片"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "rec_des"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "iconfont icon-shiliangzhinengduixiang1"
    }, [_vm._v(_vm._s(item.playcount))])])
  }))])])
},staticRenderFns: []}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "discover_music"
  }, [_vm._v("\n  账号\n")])
},staticRenderFns: []}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(78),
      "alt": "图片"
    }
  })])
}]}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "discover_music"
  }, [_vm._v("\n  排行榜\n")])
},staticRenderFns: []}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "discover_music"
  }, [_c('discover-menu'), _vm._v(" "), _c('router-view', {
    staticClass: "dis_music_view"
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "friends"
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('span', {
    staticClass: "iconfont icon-iconjiantouleft",
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mMusic"
  }, [_vm._v("歌单")]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-gaodiyin"
  })])
},staticRenderFns: []}

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('header-bar'), _vm._v(" "), _c('router-view', {
    staticClass: "router_view"
  }), _vm._v(" "), _c('btm-tab-bar', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabActive != 'playPage'),
      expression: "tabActive!='playPage'"
    }]
  }), _vm._v(" "), _c('loading', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pageLoading),
      expression: "pageLoading"
    }]
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "discover_menu"
  }, [_c('router-link', {
    attrs: {
      "tag": "li",
      "to": "selfRecommend",
      "active-class": "selected"
    }
  }, [_vm._v("个性推荐")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "musicList",
      "active-class": "selected"
    }
  }, [_vm._v("歌单")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "hostStation",
      "active-class": "selected"
    }
  }, [_vm._v("主播电台")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "billboard",
      "active-class": "selected"
    }
  }, [_vm._v("排行榜")])], 1)
},staticRenderFns: []}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "mint-button",
    class: ['mint-button--' + _vm.type, 'mint-button--' + _vm.size, {
      'is-disabled': _vm.disabled,
      'is-plain': _vm.plain
    }],
    attrs: {
      "type": _vm.nativeType,
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.icon || _vm.$slots.icon) ? _c('span', {
    staticClass: "mint-button-icon"
  }, [_vm._t("icon", [(_vm.icon) ? _c('i', {
    staticClass: "mintui",
    class: 'mintui-' + _vm.icon
  }) : _vm._e()])], 2) : _vm._e(), _vm._v(" "), _c('label', {
    staticClass: "mint-button-text"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "status"
  }, [_c('p', [_vm._v("动态")])])
}]}

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "status"
  }, [_c('p', [_vm._v("附近")])])
}]}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my_music"
  }, [_c('ul', {
    staticClass: "item_nav"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "iconfont icon-wodeshoucang"
  }), _vm._v(" "), _c('router-link', {
    staticClass: "underline_item",
    attrs: {
      "to": "/detailMusicList"
    },
    nativeOn: {
      "click": function($event) {
        _vm.goToFavoriteList($event)
      }
    }
  }, [_c('span', {
    staticClass: "item_des"
  }, [_vm._v("我的收藏")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.favoriteMusic.length))]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-arrow-right"
  })])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "iconfont icon-yinle"
  }), _vm._v(" "), _c('div', {
    staticClass: "underline_item"
  }, [_c('span', {
    staticClass: "item_des"
  }, [_vm._v("本地音乐")]), _vm._v(" "), _c('span', [_vm._v("0")]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-arrow-right"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "iconfont icon-zuijinbofang"
  }), _vm._v(" "), _c('div', {
    staticClass: "underline_item"
  }, [_c('span', {
    staticClass: "item_des"
  }, [_vm._v("最近播放")]), _vm._v(" "), _c('span', [_vm._v("0")]), _c('span', {
    staticClass: "iconfont icon-arrow-right"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('span', {
    staticClass: "iconfont icon-yuleyinlediantai"
  }), _vm._v(" "), _c('div', {
    staticClass: "underline_item"
  }, [_c('span', {
    staticClass: "item_des"
  }, [_vm._v("我的电台")]), _vm._v(" "), _c('span', [_vm._v("0")]), _c('span', {
    staticClass: "iconfont icon-arrow-right"
  })])])
}]}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header_left"
  }, [_c('span', {
    staticClass: "iconfont icon-huatong"
  }), _vm._v(" "), _c('div', {
    staticClass: "search_frame"
  }, [_c('span', {
    staticClass: "iconfont icon-sou"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchWord),
      expression: "searchWord"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索音乐、歌词、电台"
    },
    domProps: {
      "value": (_vm.searchWord)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchWord = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "bounce"
    }
  }, [_c('ul', {
    staticClass: "search_list",
    class: {
      ifShow: _vm.searchWord === ''
    }
  }, _vm._l((_vm.foundedMusicList), function(item) {
    return _c('router-link', {
      key: item.songname,
      staticClass: "detail_list",
      attrs: {
        "to": "playPage",
        "tag": "li"
      },
      nativeOn: {
        "click": function($event) {
          _vm.chooseMusic(item)
        }
      }
    }, [_vm._v(_vm._s(item.songname) + "-" + _vm._s(item.singername))])
  }))])], 1)
},staticRenderFns: []}

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header_left"
  }, [_c('span', {
    staticClass: "more"
  }, [_vm._v("更多")]), _vm._v(" "), _c('span', {
    staticClass: "mMusic"
  }, [_vm._v("我的音乐")])])
}]}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ((_vm.tabActive != 'detailMusicList') && (_vm.tabActive != 'playPage')),
      expression: "(tabActive!='detailMusicList')&&(tabActive!='playPage')"
    }],
    staticClass: "header"
  }, [_c('dm-header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabActive == 'discoverMusic'),
      expression: "tabActive=='discoverMusic'"
    }]
  }), _vm._v(" "), _c('mm-header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabActive == 'myMusic'),
      expression: "tabActive=='myMusic'"
    }]
  }), _vm._v(" "), _c('fri-header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabActive == 'friends'),
      expression: "tabActive=='friends'"
    }]
  }), _vm._v(" "), _c('accout-header', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabActive == 'account'),
      expression: "tabActive=='account'"
    }]
  }), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-gaodiyin"
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detailMusicList"
  }, [_c('dml-header'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchedMusic),
      expression: "searchedMusic"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索歌单内歌曲"
    },
    domProps: {
      "value": (_vm.searchedMusic)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchedMusic = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "content_banner"
  }, [_c('img', {
    attrs: {
      "src": _vm.musicListItem.backgroundUrl,
      "alt": "图片"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "banner_right"
  }, [_c('p', [_vm._v(_vm._s(_vm.musicListItem.name))])])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "play_list"
  }, [_c('div', {
    staticClass: "play_head"
  }, [_c('span', {
    staticClass: "iconfont icon-bofang"
  }), _vm._v(" "), _c('div', {
    staticClass: "head_right"
  }, [_c('span', {
    staticClass: "play_all"
  }, [_vm._v("播放全部")]), _c('i', [_vm._v("(共" + _vm._s(_vm.currentMusicList.length) + "首)")]), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c('ul', {
    staticClass: "music_list"
  }, _vm._l((_vm.filterMusicList), function(item, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.getMusicInfo(item, index)
        }
      }
    }, [_c('span', {
      staticClass: "num"
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('div', {
      staticClass: "music_info"
    }, [_c('router-link', {
      staticClass: "music_info_l",
      attrs: {
        "to": "/playPage"
      }
    }, [_c('h3', [_vm._v(_vm._s(item.songname))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.singername) + " - " + _vm._s(item.songname))])]), _vm._v(" "), _c('div', {
      staticClass: "music_info_r"
    }, [_c('span', {
      staticClass: "iconfont icon-bofang1"
    }), _vm._v(" "), _c('div', {
      staticClass: "detail_key",
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [_vm._v(". . .")]), _vm._v(" "), _c('mt-popup', {
      attrs: {
        "position": "bottom"
      },
      model: {
        value: (_vm.popupVisible),
        callback: function($$v) {
          _vm.popupVisible = $$v
        },
        expression: "popupVisible"
      }
    }, [_c('ul', [_c('li', [_c('span', {
      staticClass: "underline_item"
    }, [_vm._v("歌曲：Nobody")])]), _vm._v(" "), _c('li', [_c('span', {
      staticClass: "iconfont icon-bofang"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("下一首播放")])]), _vm._v(" "), _c('li', {
      class: {
        'active': _vm.isFavoriteBol
      },
      on: {
        "click": function($event) {
          _vm.favorite(_vm.currentItem, $event)
        }
      }
    }, [_c('span', {
      staticClass: "iconfont icon-unif056"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("\n                收藏到歌单")])]), _vm._v(" "), _c('li', [_c('span', {
      staticClass: "iconfont icon-xiazai"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("下载")])]), _vm._v(" "), _c('li', [_c('span', {
      staticClass: "iconfont icon-pinglun"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("评论")])]), _vm._v(" "), _c('li', [_c('span', {
      staticClass: "iconfont icon-zhuanfa"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("分享")])]), _vm._v(" "), _c('li', [_c('span', {
      staticClass: "iconfont icon-geshou"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("歌手:" + _vm._s(_vm.currentItem.singername) + "\n              ")])]), _vm._v(" "), _c('li', [_c('span', {
      staticClass: "iconfont icon-zhuanji"
    }), _c('span', {
      staticClass: "underline_item"
    }, [_vm._v("专辑")])])])])], 1)], 1)])
  }))])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content_nav"
  }, [_c('li', [_c('span', {
    staticClass: "iconfont icon-unif056"
  }), _vm._v(" "), _c('p', [_vm._v("23453")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "iconfont icon-pinglun"
  }), _vm._v(" "), _c('p', [_vm._v("123")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "iconfont icon-zhuanfa"
  }), _vm._v(" "), _c('p', [_vm._v("343")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "iconfont icon-xiazai"
  }), _vm._v(" "), _c('p', [_vm._v("下载")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mul_select"
  }, [_c('span', {
    staticClass: "iconfont icon-duoxuan"
  }), _vm._v(" "), _c('span', [_vm._v("多选")])])
}]}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header_left"
  }, [_c('span', {
    staticClass: "more"
  }), _vm._v(" "), _c('span', {
    staticClass: "acc"
  }, [_vm._v("账号")])])
}]}

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "discover_music"
  }, [_vm._v("\n  主播电台\n")])
},staticRenderFns: []}

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header_left"
  }, [_c('span', {
    staticClass: "iconfont icon-addfriends"
  }), _vm._v(" "), _c('div', {
    staticClass: "search_frame"
  }, [_c('div', {
    staticClass: "tab_zone"
  }, [_c('router-link', {
    attrs: {
      "tag": "li",
      "to": "status",
      "active-class": "activeTab"
    }
  }, [_vm._v("动态")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "tag": "li",
      "to": "nearby",
      "active-class": "activeTab"
    }
  }, [_vm._v("附近")])], 1)])])
},staticRenderFns: []}

/***/ })
],[50]);
//# sourceMappingURL=app.378e44de6f71350593d0.js.map