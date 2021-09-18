<script>
export default {
    onLaunch: function() {
        console.log('App Launch',process.env.NODE_ENV,process.env)
        wx.cloud.init({
            env: "dev-9gvzmx68c1ee405c",
            traceUser: true,
        })
    },
    onShow: function() {
        console.log('App Show')
    },
    onHide: function() {
        console.log('App Hide')
    }
}
</script>

<style lang="scss">
/*每个页面公共css */
.custom-status-bar {
    padding-top: 64px;
}

/*iphoneX、iphoneXs*/
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .custom-status-bar {
        padding-top: 88px;
    }
}

/*iphone Xs Max*/
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    .custom-status-bar {
        padding-top: 84px;
    }
}

/*iphone XR*/
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    .custom-status-bar {
        padding-top: 88px;
    }
}

/*小米 8*/
@media only screen and (min-device-width: 393px) and (max-device-height: 816px) and(-webkit-device-pixel-ratio: 2.75) {
    .custom-status-bar {
        padding-top: 75px;
    }
}

@media only screen and (min-device-width: 393px) and (max-device-height: 818px) and(-webkit-device-pixel-ratio: 2.75) {
    .custom-status-bar {
        padding-top: 75px;
    }
}

/*小米 9*/
@media only screen and (device-width: 393px) and (device-height: 851px) and (-webkit-device-pixel-ratio: 2.75) {
    .custom-status-bar {
        padding-top: 72px;
    }
}

/*华为p10*/
@media only screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
    .custom-status-bar {
        padding-top: 68px;
    }
}

/*华为p20*/
@media only screen and (device-width: 360px) and (device-height: 748px) and (-webkit-device-pixel-ratio: 3) {
    .custom-status-bar {
        padding-top: 73px;
    }
}

/*清除浮动*/
.float-clearfix {
    clear: both !important;
    &:after {
        display: block;
        content: "";
        height: 0;
        clear: both;
        overflow: hidden;
        visibility: hidden;
    }
}
</style>
