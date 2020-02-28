<template>
<view class="joke-list">
    <view v-for="(item,index) in list" :key="item.sid" class="joke-list-wrap">
        <view>类型：{{item.type}}</view>
        <view v-if="item.header" class="header">
            头像：<image :src="item.header" mode="widthFix"></image>
        </view>
        <view>昵称：{{item.name}}</view>
        <view>文案：{{item.text}}</view>
        <view class="video" v-if="item.video">
            视频：<video :src="item.video"></video>
        </view>
        <view>封面：{{item.thumbnail}}</view>
        <view v-if="item.images" class="pic">
            图片：<image :src="item.images" mode="widthFix"></image>
        </view>
        <view class="time">
            时间：{{item.passtime}}
        </view>
    </view>
</view>
</template>

<script>
import {
    mapState,
} from "vuex";

export default {
    data() {
        return {}
    },
    mounted() {
        // console.log(this.list);
        this.list.forEach(item => {
            // console.group(Object.keys(item), Object.values(item));
        })
    },
    computed: {
        ...mapState('Home', ['list']),
    },
    methods: {},
}
</script>


<style lang="scss" src="./index.scss" />
