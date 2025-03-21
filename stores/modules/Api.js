import api from '@/api/api'

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        /**
         * 获取随机网易云歌曲
         * params:
         * sort  <type=string> = [热歌榜，新歌榜，飙升榜，抖音榜，电音榜]，为空输出热歌榜
         * mid   <type=int>    = 网易云歌单ID
         * format<type=string> = 选择输出格式(json/mp3)
         */
        async getRandomSong({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            let res = await rootState.getRequest(api.randomSong, data)
            return res
        },
        /**
         * 获取随机土味情话
         */
        async getLoveWord({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            let res = await rootState.getRequest(api.loveWord)
            return res
        },
        /**
         * 获取最近的Bing 壁纸
         */
        async getWallpaper({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            let res = await rootState.getRequest(api.wallpaper)
            return res
        },
        /**
         * 开始文生图
         */
        async startDraw({ dispatch, commit, state, rootState }, data) {
          let res = await rootState.postRequest(api.startDraw, data);
          return res;
        },
        /**
         * 查询生成结果
         */
        async queryDraw({ dispatch, commit, state, rootState }, data) {
          let res = await rootState.postRequest(api.queryDraw, data);
          return res;
        },
        /**
         * 获取当前账户详情以及积分情况
         */
        async queryClientInfo({ dispatch, commit, state, rootState }, data) {
          let res = await rootState.getRequest(api.queryClientInfo);
          return res;
        },
    },
    namespaced: true
}