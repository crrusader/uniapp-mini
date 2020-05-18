<template>
<view class="content">
    <view class="wrapper">
        <view class="navbar">
            给SOFIA制作的爱心墙，biubiubiu
        </view>
        <view class="album">
            <block v-for="(item,index) in albumList" :key="index">
                <view class="imgwrap">
                    <!-- aspectFill -->
                    <image :src="item" mode="aspectFill" lazy-load="true" class="poster" @click="imgClick(index)" @error="error" />
                </view>
            </block>
        </view>
    </view>
</view>
</template>

<script>
export default {
    data() {
        return {
            current: 0,
            albumList: [],
            small: [
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDENGk*M4c4qtPSzO15bP1i3JPSFmvVSCtQLnaA.fzOFroS8t1gTUFqZRRukBGHafJQ!!/m&ek=1&kp=1&pt=0&bo=OASgBQAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDMNMTUdpQPhrp*FbKGy6tnQgkMJBYVxCWP8HsqBSNmkZMa5JS3TDq2pCou9vFFj75Q!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDNxAYe3LKGqkcyYz.CMRwHbiMaWH.zupSv9cpShNNeGLHcovEz7v7xf7ukRUsw9eVA!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDPCbcXpARvGSEBMaDWloG*.kyXSbGNFFLd5xFJsfSKT3vmriX0D08Kpb7iXFOfAsgg!!/m&ek=1&kp=1&pt=0&bo=OASgBQAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDNflG75.DvWeMPwczyn0H36Grz1Kf3U0zIbaKHqA3FYcDcFk8M4iR3Atv1vRU2LrjA!!/m&ek=1&kp=1&pt=0&bo=OAQ4BAAAAAARJxA!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDGQ4K1uXjwi8ENfd80wMYZa*ii6qeaG39RRA9Th8aFZ1t287CpqLgcpQDvIynzQBTQ!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDNYxWi9OlPTgBUuCABe6u*eiR7ar33rvsAqCBna6ZYLu0X9YSNJfEcVFrVjqI3eK3Q!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDGT7yaPJZ1slxN9jxUfPKkXTushryjwuQgGwVRY19d9u7S6MW2aG5GDxjk5WZNSMew!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDOTn5S7.9L3ornyUftC*Trz5Md3dQFpYV3cxDVZXGR4JgpuMnfWjEdAbnluHQKm6kQ!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDM6TxDo.twePfj3mf0fWgoefVrPBcyiVTqp9rP8Q7stVxb.vY1jTgYPd4HQY4P3vVA!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARJ4k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDCGkHgIna7l7nrdy.a7M1ItcvQVymUaihhFvqzKbSwCQ2Spxn*YQVFJHvbIbWNtZ1A!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARF7k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
                "https://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDHhVcSv16zAzomvcjLOuq57ljvu6aFYcU68SIU.rdMbITnBp3UGyWlkR13QGmw0MWQ!!/m&ek=1&kp=1&pt=0&bo=oAU4BAAAAAARJ4k!&tl=1&vuin=894521374&tm=1589576400#sce=14-11-3&rf=v1_ht5_qz_3.4.0_001_idc_b-4-0",
            ],
            big: [
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15NwyrV.zBjoG5G.iQbMP*2pTNG0g.MOjVZgPurDKC0LmU*eeu9u*.ZbK1yRbUiIKgFAMoW*MbhpDHZ.rPUPnN6r0!/b&bo=OASgBQAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15NwtVo1a2yYaQw6lMOLxfnmtBOw1MQ2S4n*jMgiMl.R8L4cv6KN9ZEMvyTcqkwf3fEC7TN6vHBtbcrkMAbAAc1UM!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N1xZ7w1311n0hL0PLfKHrsGx46dtlSnU0rV1gwAdQGhPEMiKEtNwHoq5dwfA83EnkOSmko4UtiQgESMC12yXKKY!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15NwusyRtKWo8uOgpMRvUXvI3BhQrNOlyd*x5XDVdLr3pohR7HfCEkMZVf9ghrHATu7PCtVWUR9Hi.9a*miL7WeF4!/b&bo=OASgBQAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/*.mI3yPYPF*NtvOuCb0eDNflG75.DvWeMPwczyn0H36Grz1Kf3U0zIbaKHqA3FYcDcFk8M4iR3Atv1vRU2LrjA!!/b&bo=OAQ4BAAAAAARBzA!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N0G3P5qCc*lhcz39htEWVqgPLB6DIqtgxCUVf8b083DhmbOcuAbSLPzDFX7LzbEZCGVK1mq0mtOQpuVqSMC9mYE!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N*sDoOVVvSW3efKbcV2AxvyhwMlOD6x.tCLO6KqagytsyNmJUzYo8cW1f1Vsv1hBXEQA11wolRLVhdaHh4xWr7Y!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N.oiipoT3g9TI2Hexs1PjcBVdUDhSTA7WVElU*cjveZimCrmKnBQk8bdQmvBrpKFX4GtLLIGoHUxNVhWnkZnv6U!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15Nw.eL34osmdZgvVOPkWorHkv.*to90gbdPHyRNZKkr*JlQnswvgaZNCgILXTWhbo1gUNQWVIzHveS1Q9upsNkTo!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N.sei*Aak6Xh5sheFdhb*XfvoAn4oKGmSlIOnwVDGz2xKeD71faSVHm.uTcPXRHGqOPxbohLgwZYqWtzzez9kuw!/b&bo=oAU4BAAAAAARJ4k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N*sJgOKXc3CuVs.B79PEuHhCgK9QsmVtjhjmyb.AC6oUQQ2rg6oZajnbclWHzsQHJy4xAZJs8iYxk2F5eHmljBI!/b&bo=oAU4BAAAAAARF7k!&rf=viewer_4&t=5",
                "http://m.qpic.cn/psc?/V12Q4QsT1WaafM/Mh4X5JDG18yu8hANyA15N7KqUmsIe0giswfiswBbiPo9jCuuEUaD*ohnYJiUmo*2FWuQwWL3kmPteFj1Br9MY5aJT0bE4tjadNYGlQTvjAc!/b&bo=oAU4BAAAAAARJ4k!&rf=viewer_4&t=5",
            ],
        }
    },
    onLoad() {},
    onShow() {},
    mounted() {
        setTimeout(() => {
            this.albumList = this.small
        }, 600)
    },
    methods: {
        imgClick(index) {
            var src = this.big[index];
            wx.previewImage({
                current: src, // 当前显示图片的http链接
                urls: this.big // 需要预览的图片http链接列表
            })
        },
        error(e) {
            console.log('error', e);
        },
    },
}
</script>

<style lang="scss">@import "index";</style>
