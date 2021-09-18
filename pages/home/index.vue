<template>
<view class="wrap custom-status-bar">
    <view class="tab" :style="{top: `${navbarheight + statusBarHeight}px`}">
        <view v-for="(item,index) in tabs" :key="index" @click="setStatus(item.status)" :class="['tab-item',{ active: item.status === status }]">
            {{item.name}}
        </view>
    </view>
    <scroll-view scroll-y :class="{'scrollTop': scrollTop}" :style="{ 'padding-top': `${fixedTop}px` }">
        <block v-if="list.length > 0">
            123
        </block>
        <block v-else>
            <button @click="send">推送</button>
            <text>今天就到此为止吧~</text>
        </block>
    </scroll-view>
</view>
</template>

<script>
import {
    mapState,
} from "vuex";

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
                    name: "今日天气",
                    status: "all",
                },
            ],
        }
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
        ...mapState('Home', ['scrollTop']),
    },
    methods: {
        send() {
            wx.requestSubscribeMessage({
                tmplIds: ['JZQVqJmFNO_DMAsor9Rc1Un8AtX6ACZU_VPY4VP8uj4'],
                success (res) {
                    // // 测试云函数
                    // wx.cloud.callFunction({
                    //     name: 'notice',
                    //     data: {
                            
                    //     },
                    //     success(res) {
                    //         console.log('成功', res)
                    //     },
                    //     fail(res) {
                    //         console.log('失败', res);
                    //     }
                    // })
                }
            })
            
        },
        //改变查询状态
        setStatus(status) {
            this.status = status;
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
