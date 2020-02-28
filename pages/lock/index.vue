<template>
<view class="wrap">
    <view class="top"></view>
    <block v-if="hide">
        <text>{{title}}</text>
        <input type="number" @confirm="confirm" v-model="pwd">
    </block>
    <block v-else>
        <view>
            <text>可爱的小粽子啊</text>
            <view></view>
            <view v-for="(item,index) in sweet">{{item}}</view>
        </view>
    </block>
</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Lock Area',
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
            if (this.pwd == '123456') {
                this.hide = false
                this.timer = setInterval(async () => {
                    let res = await this.$store.dispatch('Api/getLoveWord') // 接口调不通 未接入icp备案
                    this.sweet.push(res.data)
                }, 2000)
            }
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
