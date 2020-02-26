<template>
<view class="joke-list">
    <view v-for="(item,index) in list" :key="index">
        {{item.text}}
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
    mounted() {},
    computed: {
        ...mapState('Home', ['list']),
    },
    methods: {},
}
</script>


<style lang="scss" src="./index.scss" />
