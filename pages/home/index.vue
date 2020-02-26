<template>
<view class="wrap"></view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello'
        }
    },
    onLoad() {
        this.getJoke()
    },
    onShow() {},
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
