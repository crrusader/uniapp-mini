import Vue from 'vue'
import Vuex from 'vuex'

import {
    postRequest,
    getRequest,
} from './../api/request'

const files = require.context('./modules', false, /\.js$/);
let modules = {};

files.keys().forEach(key => {
    const filename = key.replace(/(\.\/|\.js)/g, '');
    modules[filename.replace(filename[0], filename[0].toUpperCase())] = files(
        key
    ).default
});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        postRequest,
        getRequest,
    },
    mutations: {},
    modules: {
        ...modules,
    },
})