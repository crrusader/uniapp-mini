import api from '@/api/api'

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async getJoke({
            dispatch,
            commit,
            state,
            rootState,
        }, data) {
            let res = await rootState.getRequest(api.joke, data)
            return res
        },
    },
    namespaced: true
}