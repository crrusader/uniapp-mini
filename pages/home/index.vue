<template>
  <view class="wrap custom-status-bar">
    <view class="vsbar" :class="{ opened: dialogVisible }">
      <view
        class="wrap"
        :class="{
          a: travelVisible,
          b: tipsVisible,
          c: calendarVisible,
          d: alltagVisible,
        }"
      >
        <view class="a">1</view>
        <text class="b" user-select>
          {{
            `
              * 健康码：vx/zfb搜索"海南健康码"填写信息申领(居住地填写预定酒店或民宿)
              * 防疫政策：
              *    1.小程序 ①.国务院客户端 ②.海易办
              *    2.公众号 ①.海口本地宝 ②.三亚12345 ③.三亚凤凰国际机场
              * 携带物品：
              *    1.证件：身份证、驾驶证
              *    2.衣物：防晒衣、几套好看的衣物、泳衣、一次性内裤、毛巾
              *    3.护肤：护肤品、化妆品、防晒
              *    4.装备：帽子、遮阳伞、墨镜、纸巾、拖鞋、防水袋
              *    5.电器：手机、充电器、充电宝
              *    6.其他：肠胃药、晕船药、花露水、口罩、创口贴
              * 美食：
              *    1.火车头海鲜
              *    2.四川小胡子
              *    3.嗲嗲的椰子鸡
              *    4.群众街(海南菜琼乡阁、炒冰-渔村炒冰、渔村炸鸡、小明抱罗粉)
              *    5.第一市场
              *    6.太琼百年糟粕醋海鲜火锅
              *    7.林姐香味海鲜(海棠湾店)
              *    8.琼捌炒冰(三亚湾椰梦长廊店)
              * 水果：买少去夜市，买多去新鸿港水果批发市场
              * 特产：
              *    1.琼禧1987特产店
            `
          }}
        </text>
        <view class="c">
          <button @click="changeDay(1)">第一天</button>
          <button @click="changeDay(2)">第二天</button>
          <button @click="changeDay(3)">第三天</button>
          <button @click="changeDay(4)">第四天</button>
          <button @click="changeDay(5)">第五天</button>
        </view>
        <view class="d">4</view>
      </view>
    </view>
    <view class="circular-menu circular-menu-left" :class="{ active: visible }">
      <view class="floating-btn" @click="changeVisible">
        <i class="fa fa-bars iconfont iconicon-test4"></i>
      </view>

      <view class="items-wrapper">
        <view
          class="iconfont menu-item iconaddress"
          @click="changeFunction('travelVisible')"
        ></view>
        <view
          class="iconfont menu-item iconwishlist"
          @click="changeFunction('tipsVisible')"
        ></view>
        <view
          class="iconfont menu-item iconcalendar"
          @click="changeFunction('calendarVisible')"
        ></view>
        <view
          class="iconfont menu-item iconhome1"
          @click="changeFunction('alltagVisible')"
        ></view>
      </view>
    </view>
    <map
      id="myMap"
      :longitude="longitude"
      :latitude="latitude"
      show-location
      :polyline="polyline"
      :markers="markers"
      :scale="scale"
      @markertap="markertap"
      @regionchange="regionchange"
    ></map>
  </view>
</template>

<script>
import travelLine from "./route";
export default {
  data() {
    return {
      visible: false, // 操作台
      dialogVisible: false, // 操作台弹出窗口
      travelVisible: false, // 行程所有景点
      calendarVisible: false, // 行程
      tipsVisible: false, // 注意点
      alltagVisible: false, // 所有标记点(食物)
      scale: 12,
      longitude: 109.4446,
      latitude: 18.2897,
      markers: travelLine.markers1,
      polyline: [
        // 路线图
        {
          points: travelLine.day1,
          color: "#518FF8",
          arrowLine: true,
          width: 5,
          dottedLine: false,
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {
    // 操作台展开收起
    changeVisible() {
      this.visible = !this.visible;
      this.dialogVisible = false;
      // 关闭小的
      this.travelVisible = false;
      this.tipsVisible = false;
      this.calendarVisible = false;
      this.alltagVisible = false;
    },
    // 查看行程点
    changeDay(day = 1) {
      // 获取重要点标记
      this.markers = travelLine[`markers${day}`];
      // 获取路线
      const dayRoute = travelLine[`day${day}`];
      this.polyline[0].points = dayRoute;
      // 获取中点位置聚焦
      const centerPoint = travelLine.getCenter(travelLine[`markers${day}`]);
      this.longitude = centerPoint[0];
      this.latitude = centerPoint[1];
      // 放大
      const scaleMap = [12, 11, 11, 9, 12];
      this.scale = scaleMap[day - 1];
      // 隐藏操作台
      this.visible = false;
    },
    // 拖动视野发生变化时触发
    regionchange() {
      this.visible = false;
      this.dialogVisible = false;
      // 关闭小的
      this.travelVisible = false;
      this.tipsVisible = false;
      this.calendarVisible = false;
      this.alltagVisible = false;
    },
    // 操作台选择查看功能切换
    changeFunction(dialog) {
      // 打开操作台弹出弹窗
      this.dialogVisible = true;
      // 关闭其余功能
      this.travelVisible = false;
      this.tipsVisible = false;
      this.calendarVisible = false;
      this.alltagVisible = false;
      // 打开所点击的功能
      if (dialog === "travelVisible") {
        this.visible = false;
        this.dialogVisible = false;
        // 赋值点位
        this.markers = travelLine.marker_group;
        // 清空路线
        this.polyline[0].points = [];
        // 获取中点位置聚焦
        const centerPoint = travelLine.getCenter(travelLine.marker_group);
        this.longitude = centerPoint[0];
        this.latitude = centerPoint[1];
        this.scale = 9;
      } else if (dialog === "alltagVisible") {
        this.visible = false;
        this.dialogVisible = false;
        // 赋值点位
        this.markers = travelLine.foodMarkers;
        // 清空路线
        this.polyline[0].points = [];
        // 获取路线(群众街)
        const dayRoute = travelLine.memberStreet;
        this.polyline[0].points = dayRoute;
        // 获取中点位置聚焦
        const centerPoint = travelLine.getCenter(travelLine.foodMarkers);
        this.longitude = centerPoint[0];
        this.latitude = centerPoint[1];
        this.scale = 10;
      } else {
        if (dialog === "tipsVisible") {
          this.visible = false;
        }
        this[dialog] = true;
      }
    },
    markertap(e) {
      const targetDot = this.markers.find(
        (item) => item.id === e.detail.markerId
      );
      if (targetDot) {
        wx.openLocation({
          latitude: targetDot.latitude,
          longitude: targetDot.longitude,
          name: targetDot.label.content,
          address: targetDot.callout.content || 'GO GO GO !!!',
        });
      }
    },
    /**
     * 打开每日攻略时出现swiper
     * 滚动展示每一天行程安排
     * 并且滑动的时候去到对应的绘制路线
     */
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
@import "./menu.scss";
</style>
