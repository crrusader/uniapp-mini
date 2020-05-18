<template>
<view class="content">
    <view class="wrapper">
        <button type="button" name="button" class="btn btn2">送给我的小公主</button>
        <swiper class="swiper" circular="true" next-margin="30px" previous-margin="30px" @change="swiperchange">
            <block v-for="(item,index) in imglist" :key="index">
                <swiper-item class="swiper-item">
                    <image :src="item.src" mode="widthFix" class="poster" lazy-load="true" @click="imgClick(index)" />
                </swiper-item>
            </block>
        </swiper>
        <button type="button" name="button" class="btn" v-show="btnshow" @click="goHome">后面还有呢~</button>
    </view>
</view>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            btnshow: false,
            background: 'https://www.assdrty.com/images/2020/05/16/0077qhzWly1fq7tvv7yipg30dc0loqv6.gif',
            imglist: [],
            imglist2: [{
                src: "https://m.qpic.cn/psc?/V12Q4QsT06MLFa/*.mI3yPYPF*NtvOuCb0eDPOBGhMSOQbzdabVjotb62RUc7StbJDkikfsh1a1.s4W9wDhEbfbxlTSvoaC.SU2yg!!/b&bo=OARUBgAAAAARB14!&rf=viewer_4",
                text: "小宝太美了"
            }, {
                src: "https://m.qpic.cn/psc?/V12Q4QsT06MLFa/Mh4X5JDG18yu8hANyA15N99ASgHo43w2RmLzr0B6dvVLQAjMrcLIFkMFVQoBE256rvseaxTKRuwwsb1tBzAXlJUyjZsaqhjL46AZOX0LuO8!/b&bo=PgTEAgAAAAARF9w!&rf=viewer_4",
                text: "这张照片太有感觉了~"
            }, {
                src: "https://m.qpic.cn/psc?/V12Q4QsT06MLFa/*.mI3yPYPF*NtvOuCb0eDDoB.mz0MdfhfsHbQM2nY3sJSB*VyxwyzHfJ0YOaesK5mPM9iKSx8yN1Iw0Ti.FIWg!!/b&bo=IgIwAwAAAAARByM!&rf=viewer_4",
                text: "我们要一直走下去哦"
            }, {
                src: "https://m.qpic.cn/psc?/V12Q4QsT35EKsy/Mh4X5JDG18yu8hANyA15N79.rEakkkLcLesD0rUvi3wJJ8tbWWK1BFq7wSft6yAphrz8GsVtw9biThgncE6nhlVxbo1YkACRDiqDmJDBpt4!/b&bo=YASQBgAAAAARF9I!&rf=viewer_4",
                text: "搂着你的小蛮腰"
            }, {
                src: "https://m.qpic.cn/psc?/V12Q4QsT06MLFa/Mh4X5JDG18yu8hANyA15N2gXsdGIPWdAWpADxZusRc1ad65FU5ifq7BjHiiQyCopoGhyDuCgjs8xGk3bh6qcvc3ou1QWIyfIF2qj83jfRs8!/b&bo=KgJIAwAAAAARF0M!&rf=viewer_4",
                text: "这是我们第一次一起拍写真"
            }, {
                src: "https://m.qpic.cn/psc?/V12Q4QsT06MLFa/Mh4X5JDG18yu8hANyA15N5uf6X.gaHbVOyr75mOZeYGsbNDkiUP*ZHQjeyi9ncyx3RE59KjMT9xlGAYBv6GElXYujPdOmBMfVhkcGyIPXt0!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4",
                text: "床上私房照，哈哈哈不能泄露"
            }, ],
            cover: 'https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDENGk*M4c4qtPSzO15bP1i3JPSFmvVSCtQLnaA.fzOFroS8t1gTUFqZRRukBGHafJQ!!/b&bo=OASgBQAAAAARB6k!&rf=viewer_4&t=5'
        }
    },
    onLoad() {
        const backgroundAudioManager = wx.getBackgroundAudioManager()
        console.log(backgroundAudioManager);
        backgroundAudioManager.title = '送给sofia的礼物'
        backgroundAudioManager.epname = '送给sofia的礼物'
        backgroundAudioManager.singer = '大宝'
        backgroundAudioManager.coverImgUrl = this.cover
            // 设置了 src 之后会自动播放
        backgroundAudioManager.src = 'https://webfs.yun.kugou.com/202005160329/316322ed909904c083307e4a7cb60ce0/G159/M05/1B/03/f5QEAFySkI-AE6uOACiHro6UphQ692.mp3'
    },
    onShow() {},
    mounted() {
        setTimeout(() => {
            this.imglist = this.imglist2
        }, 600)
    },
    methods: {
        goHome() {
            wx.switchTab({
                url: '/pages/home/index'
            })
        },
        imgClick(index) {
            wx.showToast({
                title: this.imglist[index].text,
                icon: 'none',
                duration: 2000
            })
        },
        swiperchange(e) {
            this.current++
                if (this.current > (this.imglist.length - 1) && (e.detail.current == (this.imglist.length - 1) || e.detail.current == 1)) {
                    this.btnshow = true
                }
        },
    },
}
</script>

<style lang="scss">@import "index";</style>
