<template>
<view class="wrap">
    <view class="top"></view>
    <block v-if="hide">
        <text>{{title}}</text>
        <input type="number" @confirm="confirm" v-model="pwd">
    </block>
    <block v-else>
        <view>
            <view>专属订阅</view>
            <view v-for="(item,index) in sweet" :key="index">{{item}}</view>
        </view>
    </block>
</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Lock Area Enter Your Password!',
            pwd: '',
            hide: true,
            sweet: [],
            timer: null,
        }
    },
    onLoad() {},
    onShow() {},
    onHide() {
        this.hide = true
        this.pwd = ''
        this.timer && clearInterval(this.timer)
    },
    methods: {
        async confirm() {
            if (this.pwd == '960614') {
                this.hide = false
                this.timer = setInterval(async () => {
                    this.sweet.push(new Date().toLocaleString())
                }, 2000)
            }
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
