import api from '@/api/api'

export default {
    state: {
        page: 1,
        count: 20,
        type: 'all', // all,video,image,gif,text
        scrollTop: false,
        list: [],
    },
    getters: {},
    mutations: {
        setScrollTop(state, data) {
            state.scrollTop = data
        },
        pageInit(state, data) {
            state.page = 1;
        },
        pageNext(state, data) {
            state.page = state.page + 1;
        },
        setType(state, data) {
            state.type = data
        },
        setList(state, data) {
            state.list = data
        },
        pushList(state, data) {
            state.list = state.list.concat(data);
        },
    },
    actions: {
        // 按照参数获取笑话
        async getJoke({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            // 初始化页数
            commit('pageInit', 1);
            let res = await rootState.getRequest(api.joke, {
                page: state.page,
                count: state.count,
                type: state.type,
                ...data,
            })
            // 设置查询的类型
            data.type && commit('setType', data.type)
            // 设置数据
            if (res.data && res.data.code == 200 && res.data.result && res.data.result.length) {
                commit('setList', res.data.result)
            }
            // 让滚动区域到最顶部
            commit('setScrollTop', true)
            setTimeout(() => {
                commit('setScrollTop', false)
            }, 60)
            return res
        },
        // 按照参数获取分页笑话
        async getNextJoke({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            // page设置为下一页
            commit('pageNext');
            let res = await rootState.getRequest(api.joke, {
                page: state.page,
                count: state.count,
                type: state.type,
                ...data,
            })
            // concat下一页的数据
            if (res.data && res.data.code == 200 && res.data.result && res.data.result.length) {
                commit('pushList', res.data.result)
            }
            return res
        },
        /**
         * 获取随机的数量可指定的笑话
         * 不传page则会获取到随机的笑话
         */
        async getRandomJoke({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            let res = await rootState.getRequest(api.joke, {
                count: state.count,
                type: state.type,
                ...data,
            })
            return res
        },
    },
    namespaced: true
}