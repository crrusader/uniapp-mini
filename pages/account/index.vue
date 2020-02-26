<template>
<view class="content">
    <view class="logo">
        <image src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" mode="widthFix"></image>
        <open-data type="userAvatarUrl" class="avatar"></open-data>
    </view>
    <view class="text-area">
        <i class="iconfont iconfree-shipping"></i>
        <text class="title">{{title}}</text>
        <open-data type="userNickName"></open-data>
    </view>
</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello'
        }
    },
    onLoad(options) {},
    onShow() {},
    methods: {}
}
</script>


<style lang="scss" src="./index.scss" />