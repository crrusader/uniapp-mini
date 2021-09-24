<template>
<view class="content">
    <!-- 背景图 -->
    <image class="background" v-if="backPhoto" :src="backPhoto" mode="aspectFit"></image>
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
            title: 'Hello',
            backPhoto: '',
            photoList: [
                "cloud://dev-9gvzmx68c1ee405c.6465-dev-9gvzmx68c1ee405c-1307496343/ours/sun4.jpg",
                "cloud://dev-9gvzmx68c1ee405c.6465-dev-9gvzmx68c1ee405c-1307496343/ours/sun3.jpg",
                "cloud://dev-9gvzmx68c1ee405c.6465-dev-9gvzmx68c1ee405c-1307496343/ours/sun2.jpg",
                "cloud://dev-9gvzmx68c1ee405c.6465-dev-9gvzmx68c1ee405c-1307496343/ours/sun1.jpg",
                "cloud://dev-9gvzmx68c1ee405c.6465-dev-9gvzmx68c1ee405c-1307496343/ours/sun5.jpg",
            ],
        }
    },
    onPullDownRefresh(){
        this.getPhoto()
        this.getBGM()
    },
    onLoad() {
        this.getBGM()
        this.getPhoto()
    },
    onShow() {},
    methods: {
        // 设置背景音乐
        async getBGM() {
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
                success: function() {
                    wx.stopPullDownRefresh()
                }
            })
        },
        // 设置背景图片
        async getPhoto() {
            // let result = await this.$store.dispatch('Api/getWallpaper')
            // this.photoList = result.data.images
            this.backPhoto = this.photoList[Math.floor(Math.random() * this.photoList.length)]
        },
    }
}
</script>


<style lang="scss" src="./index.scss" />