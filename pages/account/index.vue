<template>
<view class="content">
    <view class="logo">
        <image src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" mode="widthFix"></image>
        <view class="avatar">
            <open-data type="userAvatarUrl" class="avatar-data"></open-data>
        </view>
    </view>
    <view class="text-area">
        <text class="title">{{title}}</text>
        <open-data type="userNickName" class="nickname"></open-data>
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
    async onLoad() {
        this.$store.dispatch('Api/getWallpaper')
        // 设置背景音乐
        let res = await this.$store.dispatch('Api/getRandomSong')
        let music = res && res.data && res.data.data
        // 歌手：music.artistsname
        wx.playBackgroundAudio({
            dataUrl: music.url,
            title: music.name,
            coverImgUrl: music.picurl,
            fail: function(a) {
                console.log(a);
            },
        })
    },
    onShow() {},
    methods: {}
}
</script>


<style lang="scss" src="./index.scss" />