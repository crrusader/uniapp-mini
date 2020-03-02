<template>
<view class="wrap custom-status-bar">
    <view class="tab" :style="{top: `${navbarheight + statusBarHeight}px`}">
        <view v-for="(item,index) in tabs" :key="index" @click="setStatus(item.status)" :class="['tab-item',{ active: item.status === status }]">
            {{item.name}}
        </view>
    </view>
    <scroll-view scroll-y :class="{'scrollTop': scrollTop}" @scrolltolower="scrollBottom" :style="{ 'padding-top': `${fixedTop}px` }">
        <block v-if="list.length > 0">
            <jokeList />
        </block>
        <block v-else>
            <text>今天就到此为止吧~</text>
        </block>
    </scroll-view>
</view>
</template>

<script>
import {
    mapState,
} from "vuex";

import jokeList from "@/components/page-components/home/jokelist/index";
import safeArea from "@/components/common/mixins/safe-area";

export default {
    mixins: [safeArea()],
    data() {
        return {
            title: 'Hello',
            status: 'all',
            fixedTop: 64,
            navbarheight: 44, // 小程序右上角占据高度
            tabs: [{
                    name: "全部类型",
                    status: "all",
                },
                {
                    name: "视频",
                    status: "video",
                },
                {
                    name: "图片",
                    status: "image",
                },
                {
                    name: "动态图",
                    status: "gif",
                },
                {
                    name: "文字",
                    status: "text",
                },
            ],
        }
    },
    components: {
        jokeList,
    },
    onLoad() {
        this.getJoke()
    },
    mounted() {
        this.$nextTick(() => {
            const query = uni.createSelectorQuery().in(this);
            query.select('.tab').boundingClientRect(data => {
                this.fixedTop = data.top + data.height
            }).exec();
        })
    },
    computed: {
        ...mapState('Home', ['scrollTop', 'list']),
    },
    methods: {
        async getJoke() {
            let res = await this.$store.dispatch('Home/getJoke', {
                type: this.status,
            })
        },
        //改变查询状态
        setStatus(status) {
            this.status = status;
            this.$store.commit('Home/setType', status)
            this.getJoke();
        },
        scrollBottom() {
            this.$store.dispatch('Home/getNextJoke')
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
