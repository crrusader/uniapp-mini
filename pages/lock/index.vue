<template>
<view class="wrap">
    <block v-if="hide">
        <text>{{title}}</text>
        <input type="number" @confirm="confirm" v-model="pwd">
    </block>
    <block v-else>
        <view>
            <text>可爱的小粽子啊</text>
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
        }
    },
    onLoad() {},
    onShow() {},
    onHide() {
        this.hide = true
        this.pwd = ''
    },
    methods: {
        confirm() {
            if (this.pwd == '123456') {
                this.hide = false
            }
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
