<template>
<view class="content">
    <view class="logo">
        <image src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png" mode="widthFix"></image>
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
    onLoad() {},
    onShow() {
        this.getJoke()
    },
    methods: {
        async getJoke() {
            let res = await this.$store.dispatch('Home/getJoke', {
                page: 1,
                count: 3, // 最多一页20条
                type: 'video',
            })
            console.log(res);
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
