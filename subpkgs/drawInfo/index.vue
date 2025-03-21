<template>
  <view class="wrap">
    <view class="tip"
      >图片URL的有效期为半个小时，请获取后自行进行保存，长按条目可删除</view
    >
    <view class="historyList">
      <view
        class="item"
        @click="openImg(item)"
        @longpress="deleteHistory(item)"
        v-for="(item, index) in historyDraw"
        :key="index"
      >
        <view class="item-prompt"> 提示词：{{ item.taskPrompt }} </view>
        <view class="item-id"> 绘画ID：{{ item.taskId }} </view>
      </view>
      <view class="empty" v-if="historyDraw.length === 0">
        暂无历史绘画记录
      </view>
    </view>
  </view>
</template>

<script>
const STORAGE_KEY = "historyDraw";

export default {
  data() {
    return {
      historyDraw: [],
    };
  },
  onLoad() {
    this.initHistoryList();
  },
  onShow() {},
  methods: {
    // 初始化本地历史绘画记录和账户信息
    initHistoryList() {
      wx.getStorage({
        key: STORAGE_KEY,
        success: (res) => {
          const data = JSON.parse(res.data);
          const isArray = Array.isArray(data);
          this.historyDraw = isArray ? data : [];
        },
      });
    },
    // 长按操作
    deleteHistory(item) {
      wx.showModal({
        title: "温馨提示",
        content: "请确认是否删除该条目",
        success: (res) => {
          if (res.confirm) {
            const historyIndex = this.historyDraw.findIndex(
              (history) => history.taskId === item.taskId
            );

            this.historyDraw.splice(historyIndex, 1);

            wx.setStorage({
              key: STORAGE_KEY,
              data: JSON.stringify(this.historyDraw),
              success: () => {
                this.initHistoryList();

                wx.showToast({
                  title: "删除成功",
                  icon: "none",
                });
              },
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    async openImg(item) {
      wx.showLoading({
        title: "加载绘画中...",
      });

      let { data: res } = await this.$store.dispatch("Api/queryDraw", {
        taskId: item.taskId,
      });

      wx.hideLoading();

      if (res.code !== 0) return;

      /**
       * @argument state ：string
       * 1.in_queue任务当前已经进入队列，等待执行中
         2.running任务当前正在执行中，请继续轮询此接口获取最新状态
         3.success任务执行结束，并且结果为成功，可以获取任务结果
         4.fail 任务执行结束，但是结果为失败，可以获取失败原因
       * @argument progress ：number
       * 任务进度：取值范围0~1.0
       * @argument current_image ：string
       * @argument audit ：integer 
       * @argument imgUrl ：string 
       * @argument images ：array 
       */
      const { state, progress, images } = res.data || {};

      if (state === "in_queue") {
        wx.showToast({
          title: "任务当前已经进入队列，请等待执行",
          icon: "none",
        });
      } else if (state === "running") {
        wx.showToast({
          title: `任务当前正在执行中，进度为${progress * 100}%`,
          icon: "none",
        });
      } else if (state === "success") {
        wx.previewImage({
          urls: images.map((item) => item.imageUrl),
          showmenu: true,
        });
      } else if (state === "fail") {
        wx.showToast({
          title: "任务执行失败",
          icon: "none",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "index";
</style>
