<template>
  <view class="wrap">
    <view class="account-info">
      <view>
        剩余积分：
        <view class="account-balance">{{ balance }}</view>
      </view>
      <view>
        已使用：<view class="account-used">{{ used }}</view>
      </view>
    </view>

    <view class="uni-list">
      <view class="uni-list-cell-left"> 选择风格: </view>
      <picker
        @change="changeEvent($event, 'index')"
        :value="index"
        :range="array"
        range-key="label"
      >
        <view class="uni-input">{{ array[index].label }}</view>
      </picker>
    </view>

    <textarea
      maxlength="-1"
      :disabled="loading"
      class="form-textarea"
      placeholder="输入提示词[prompt]:描述画面中需要出现的内容"
      v-model.trim="prompt"
      name="textarea"
    />

    <textarea
      maxlength="-1"
      :disabled="loading"
      class="form-textarea"
      placeholder="输入负面词条:用于排除画面中要出现的内容描述"
      v-model.trim="negativePrompt"
      name="textarea"
    />

    <view v-if="img" class="img-wrap">
      长按图片删除:
      <image
        :src="img"
        mode="aspectFit"
        @click="previewImage"
        @longpress="deleteImage"
        class="img"
      />
    </view>

    <!-- 细节倍率 -->
    <view class="detailsLevel">
      细节倍率:
      <slider
        :show-value="true"
        :min="1"
        :max="9"
        @change="changeEvent($event, 'detailsLevel')"
        :value="detailsLevel"
      />
    </view>

    <!-- 批量生图 -->
    <view class="detailsLevel">
      批量生成数量:
      <slider
        :show-value="true"
        :min="1"
        :max="6"
        :value="batchSize"
        @change="changeEvent($event, 'batchSize')"
      />
    </view>

    <view v-if="img" class="detailsLevel">
      <view>
        图生图:
        <switch
          :checked="img2img"
          color="#FFCC33"
          style="transform: scale(0.7)"
          @change="changeEvent($event, 'img2img')"
        />
      </view>
      <view>
        检测人脸:
        <switch
          :checked="facePreservation"
          color="#FFCC33"
          style="transform: scale(0.7)"
          @change="changeEvent($event, 'facePreservation')"
        />
      </view>
      <view>
        脸部修复:
        <switch
          :checked="faceFix"
          color="#FFCC33"
          style="transform: scale(0.7)"
          @change="changeEvent($event, 'faceFix')"
        />
      </view>
      <view>
        性别检测:
        <switch
          :checked="genderDetect"
          color="#FFCC33"
          style="transform: scale(0.7)"
          @change="changeEvent($event, 'genderDetect')"
        />
      </view>
    </view>

    <button :disabled="loading" @click="uploadOrDelImg" class="mt10">
      参考图片
    </button>

    <button :disabled="loading" @click="bindFormSubmit" class="draw">
      开始绘画
    </button>

    <button
      :disabled="loading"
      @click="openHistory"
      v-if="historyDraw.length > 0"
    >
      查看历史绘画记录
    </button>
    <button :disabled="loading" @click="initSetup">初始化设置</button>
  </view>
</template>

<script>
const STORAGE_KEY = "historyDraw";
export default {
  data() {
    return {
      loading: false,
      array: [
        {
          label: "二次元",
          code: "1",
        },
        {
          label: "真人写实",
          code: "15",
        },
        {
          label: "Q版3D",
          code: "853",
        },
        {
          label: "黏土风格（大模型）",
          code: "1795",
        },
        {
          label: "新春佳人",
          isTimeLimit: true,
          code: "974",
        },
        {
          label: "新春儿插",
          isTimeLimit: true,
          code: "977",
        },
        {
          label: "儿童肖像(大模型)",
          isTimeLimit: true,
          code: "1389",
        },
        {
          label: "动漫大模型（大模型）",
          isTimeLimit: true,
          code: "1811",
        },
      ],
      index: 0,
      prompt: "",
      negativePrompt: "",
      drawToken: "Bearer 04a9a73c65b54119bb4b28e5817092e8",
      img: "",
      detailsLevel: 5,
      batchSize: 1,
      facePreservation: false,
      faceFix: false,
      genderDetect: false,
      img2img: false,
      historyDraw: [],
      balance: 0,
      used: 0,
    };
  },
  onLoad() {
    wx.setStorageSync("token", this.drawToken);
    this.initHistoryList();
  },
  onShow() {},
  onHide() {},
  methods: {
    // 获取账户积分信息
    async getAccountInfo() {
      let { data: res } = await this.$store.dispatch("Api/queryClientInfo");

      if (res.code !== 0) return;

      // 获取积分详情展示
      const {
        balance, // integer 账号剩余积分
        used, // integer 账号累计消耗积分
      } = res.data || {};

      this.balance = balance || 0;
      this.used = used || 0;
    },
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

      // 获取账户积分信息
      this.getAccountInfo();
    },
    // 开始绘画
    async bindFormSubmit() {
      if (!this.prompt && !this.img) {
        wx.showToast({
          title: "请输入提示词",
          icon: "error",
        });
        return;
      }

      this.loading = true;

      // 图生图时用到参数
      const obj = this.img
        ? {
            faceFix: this.faceFix,
            imgOptions: {
              img: this.img,
              facePreservation: this.facePreservation,
              genderDetect: this.genderDetect,
              facePreservationCount: 3,
            },
          }
        : {};

      let { data: res } = await this.$store.dispatch("Api/startDraw", {
        modelStyleId: this.array[this.index]?.code || 1,
        prompt: this.prompt || undefined,
        negativePrompt: this.negativePrompt || undefined,
        batchSize: this.batchSize,
        detailsLevel: this.detailsLevel,
        img: this.img || undefined,
        ...obj,
      });

      this.loading = false;

      if (res.code !== 0) return;

      const {
        paintingSign, // string 绘画任务ID
        used, // integer 本次扣减积分
        balance, // integer 账户当前余额
        taskLimitCount, // integer 任务限制数
      } = res.data || {};

      if (paintingSign) {
        this.historyDraw.unshift({
          taskId: paintingSign,
          taskPrompt: this.prompt,
          negativePrompt: this.negativePrompt,
        });

        wx.setStorage({
          key: STORAGE_KEY,
          data: JSON.stringify(this.historyDraw),
          success: () => {
            this.initHistoryList();

            wx.showModal({
              title: "温馨提示",
              content: "任务已提交完成，请点击查看历史绘画记录查询生成记录",
              showCancel: false,
            });
          },
        });

        // this.prompt = "";
        // this.negativePrompt = "";
      }
    },
    openHistory() {
      wx.navigateTo({
        url: "/subpkgs/drawInfo/index",
      });
    },
    // 上传参考图
    uploadOrDelImg() {
      wx.chooseMedia({
        count: 1,
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        success: async (res) => {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles[0].tempFilePath;
          this.img = await this.imgToBase64(tempFilePaths);
        },
      });
    },
    deleteImage() {
      wx.showModal({
        title: "温馨提示",
        content: "请确认是否删除图片",
        success: (res) => {
          if (res.confirm) {
            this.img = "";
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        },
      });
    },
    previewImage() {
      wx.previewImage({
        urls: [this.img],
      });
    },
    // 小程序本地上传图片转base64
    imgToBase64(filePath) {
      return new Promise((resolve, reject) => {
        let baseFormat = "data:image/png;base64,";
        let base64 = wx.getFileSystemManager().readFileSync(filePath, "base64");
        resolve(baseFormat + base64);
      });
    },
    // 通用数据绑定更新事件
    changeEvent(e, target) {
      this[target] = e.detail.value;
    },
    initSetup() {
      const data = JSON.parse(JSON.stringify(this.$options.data.call(this)));

      Reflect.deleteProperty(data, "historyDraw");
      Reflect.deleteProperty(data, "balance");
      Reflect.deleteProperty(data, "used");

      Object.assign(this.$data, data);
    },
  },
};
</script>

<style lang="scss" src="./index.scss" />
