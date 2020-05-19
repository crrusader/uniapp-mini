<template>
<view class="wrap custom-status-bar">
    <view class="navbar">
        给我的sofia小仙女
    </view>
    <scroll-view scroll-y :style="{ 'padding-top': '100px' }">
        <view class="container">
            <!-- 1 -->
            <view class="title">
                2018.01.17，那天下了大雪，说好一起去泡温泉的。因为你看上去很冷，所以在路上的时候偷偷抱了你，虽然那天没有泡成温泉，但是那是我们第一次见面，第一次被你亲。⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄
            </view>
            <view class="content">
                <image :src="imglist[0]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 2 -->
            <view class="title">
                我们在电话里聊天，你还撒娇让我过来看你，那次我定了第二天的大巴，请好假我就来找你了，见到你还挺开心的。我记得那次你们那边的雪还没有化完，还有好厚的一层积雪，我们还打了雪仗。
            </view>
            <!-- 3 -->
            <view class="title">
                过年期间跑出来，一起去了杭州玩，定了好看的民宿，在那边玩了好多天，一起去爬山，一起去庙里拜佛，一起去了好多好玩的地方，期间还给你拍了照片，哈哈哈第一次给你拍照被你疯狂吐槽，不过最后还是被我哄好啦。
            </view>
            <view class="content">
                <image :src="imglist[1]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[2]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[3]" mode="aspectFill" class="poster rotate" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 4 -->
            <view class="title">
                这是去杭州的时候做的陶艺瓶子，最后的时候你说应该加上你的名字才浪漫，哈哈哈哈
            </view>
            <view class="content">
                <image :src="imglist[5]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[7]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 5 -->
            <view class="title">
                我们两个的合体照
            </view>
            <view class="content">
                <image :src="imglist[6]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 6 -->
            <view class="title">
                这算是第一次正式的跟你去泡温泉啦~伸出你的臭脚丫
            </view>
            <view class="content">
                <image :src="imglist[4]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 7 -->
            <view class="title">
                第一次跟你去参加活动“时装周”，我们一起拍了照片
            </view>
            <view class="content">
                <image :src="imglist[8]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[9]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 8 -->
            <view class="title">
                那年五一一起跟你去了南京玩耍，跟你穿的第一件情侣装，爱情隧道、南京大学、夫子庙...
            </view>
            <view class="content">
                <image :src="imglist[12]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[10]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[11]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 9 -->
            <view class="title">
                一起去当了宠物领养志愿者(*╹▽╹*)
            </view>
            <view class="content">
                <image :src="imglist[13]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 10 -->
            <view class="title">
                一起过的第一个520
            </view>
            <view class="content">
                <image :src="imglist[14]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 11 -->
            <view class="title">
                附上我们家包子美照
            </view>
            <view class="content">
                <image :src="imglist[123]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[15]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[124]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 12 -->
            <view class="title">
                陪你一起去拍美美的写真
            </view>
            <view class="content">
                <image :src="imglist[16]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[17]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[18]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <view class="tips two">大白腿</view>
                <view class="tips three">美人鱼</view>
            </view>
            <!-- 13 -->
            <view class="title">
                第一个半年，你送我的印有我的可乐，我们还一起做了蛋糕庆祝。
            </view>
            <view class="content">
                <image :src="imglist[19]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[20]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[21]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 14 -->
            <view class="title">
                我们又出去玩了，这次是国庆节，我们去了丽水、温州，最后是温岭，嘿嘿嘿，还去了大陈岛
            </view>
            <view class="content more">
                <image :src="imglist[25]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[26]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[22]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[23]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[24]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[27]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[28]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[29]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[30]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[31]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[33]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[34]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[35]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[36]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[37]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[38]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[39]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[40]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[41]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[42]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[43]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[44]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 15 -->
            <view class="title">
                跟你第一次一起参加我们公司的团建
            </view>
            <view class="content">
                <image :src="imglist[45]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[46]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 16 -->
            <view class="title">
                万圣节party time~~~
            </view>
            <view class="content">
                <image :src="imglist[47]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[48]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <view class="tips two">大白腿</view>
            </view>
            <!-- 17 -->
            <view class="title">
                我给你拍的照片，太好看了小宝(*╹▽╹*)
            </view>
            <view class="content">
                <image :src="imglist[49]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[50]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 18 -->
            <view class="title">
                我们第一次一起去迪士尼乐园
            </view>
            <view class="content more">
                <image :src="imglist[51]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[52]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[53]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[54]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <view class="tips two first">小熊维尼</view>
                <view class="tips three">加勒比海盗</view>
            </view>
            <!-- 19 -->
            <view class="title">
                跨年夜，也是跟你的第一次跨年
            </view>
            <view class="content">
                <image :src="imglist[55]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 20 -->
            <view class="title">
                跟你第一次拍情侣写真
            </view>
            <view class="content">
                <image :src="imglist[57]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <view class="title">
                写真花絮
            </view>
            <view class="content">
                <image :src="imglist[56]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[58]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[59]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 21 -->
            <view class="title">
                和你第二次去泡温泉了，我们还在图二的小帐篷里做了羞羞的事情
            </view>
            <view class="content">
                <image :src="imglist[60]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[61]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 22 -->
            <view class="title">
                樱花盛开的季节，团建去了滴水湖，和你一起
            </view>
            <view class="content">
                <image :src="imglist[62]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[63]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 23 -->
            <view class="title">
                清明放假，一起去了无锡鼋头渚玩耍
            </view>
            <view class="content more">
                <image :src="imglist[64]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[65]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[66]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[69]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[70]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[71]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <view class="tips three second">回上海啦~</view>
            </view>
            <!-- 24 -->
            <view class="title">
                我和你434天啦，好快呀，嘻嘻嘻
            </view>
            <view class="content">
                <image :src="imglist[67]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[68]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 24 -->
            <view class="title">
                跟你也是第一次去摘草莓，嘿嘿
            </view>
            <view class="content">
                <image :src="imglist[72]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[73]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 25 -->
            <view class="title">
                跟你也是第一次去摘草莓，嘿嘿
            </view>
            <view class="content">
                <image :src="imglist[72]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[73]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 26 -->
            <view class="title">
                "星黛露"和"皮卡丘"
            </view>
            <view class="content">
                <image :src="imglist[74]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[75]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 26 -->
            <view class="title">
                因为0523没有给你过成生日，所以放在周天给你补过了
            </view>
            <view class="content">
                <image :src="imglist[76]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[77]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 27 -->
            <view class="title">
                放几张你的丑照
            </view>
            <view class="content">
                <image :src="imglist[78]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[80]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 28 -->
            <view class="title">
                快到你的0706了，但是你说要回趟安吉，所以这次提前给你过啦，一起做蛋糕，晚上一起烛光晚餐，太温馨啦
            </view>
            <view class="content">
                <image :src="imglist[83]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[84]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[85]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 29 -->
            <view class="title">
                我们又一次一起团建啦，去爬山and漂流
            </view>
            <view class="content">
                <image :src="imglist[86]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[87]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 30 -->
            <view class="title">
                第一次见到你的闺蜜们，说实话刚开始有点怂，见了面之后就不怂了哈哈哈
            </view>
            <view class="content">
                <image :src="imglist[89]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[90]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 31 -->
            <view class="title">
                你跟我一起过我的生日，哈哈哈，你说还是你亲自做的蛋糕
            </view>
            <view class="content">
                <image :src="imglist[93]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[94]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[95]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 32 -->
            <view class="title">
                赶在夏天的尾巴跟你一起去呼伦贝尔大草原上撒欢
            </view>
            <view class="content more">
                <image :src="imglist[97]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[98]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[99]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[96]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[101]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[100]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 33 -->
            <view class="title">
                以下是我们游记的游客照
            </view>
            <view class="content more">
                <image :src="imglist[102]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[103]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[104]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[105]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[106]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[107]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[108]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[109]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[110]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[111]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[112]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[113]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[114]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[115]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[116]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[117]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 33 -->
            <view class="title">
                今年跨年，因为你说过想跟我一起去酒吧，所以最后我们一起去了酒吧跨年了
            </view>
            <view class="content">
                <image :src="imglist[118]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[119]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 34 -->
            <view class="title">
                光明正大拍你对我使白眼的样子<br> 光明正大拍你认真抄心经的样子
            </view>
            <view class="content">
                <image :src="imglist[120]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
                <image :src="imglist[121]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
            <!-- 35 -->
            <view class="title">
                因为疫情原因，我们好久没见了。无数次想你想的睡不着，快要见到你了我好激动呀，这是我做给你的礼物，希望你喜欢~你的大宝
            </view>
            <view class="content">
                <image :src="imglist[125]" mode="aspectFill" class="poster" lazy-load="true" @click="imgClick" />
            </view>
        </view>
    </scroll-view>
</view>
</template>

<script>
import imglist from '@/api/imglist'
export default {
    data() {
        return {
            imglist: [],
        }
    },
    components: {},
    onLoad() {},
    mounted() {
        this.imglist = imglist
    },
    computed: {},
    methods: {
        imgClick() {
            console.log('随机弹出爱心或者其他文字');
        },
    },
}
</script>


<style lang="scss" src="./index.scss" />
