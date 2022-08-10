import day1 from "./day1.json";
import day2 from "./day2.json";
import day3 from "./day3.json";
import day4 from "./day4.json";
import day5 from "./day5.json";
import memberStreet from "./memberstreet.json";
function transformLocation(dataJson) {
    return dataJson.map((item) => ({
        latitude: item[0],
        longitude: item[1],
    }));
}
// 获取多个点的经纬度中点
function getCenter(pointArray) {
    var sortedLongitudeArray = pointArray
        .map((item) => item.longitude)
        .sort(); //首先对经度进行排序，红色部分是array中经度的名称
    var sortedLatitudeArray = pointArray
        .map((item) => item.latitude)
        .sort(); //对纬度进行排序，红色部分是array中纬度的名称
    var centerLongitude = (
        (parseFloat(sortedLongitudeArray[0]) +
            parseFloat(sortedLongitudeArray[sortedLongitudeArray.length - 1])) /
        2
    ).toFixed(4);
    const centerLatitude = (
        (parseFloat(sortedLatitudeArray[0]) +
            parseFloat(sortedLatitudeArray[sortedLatitudeArray.length - 1])) /
        2
    ).toFixed(4);
    return [centerLongitude, centerLatitude];
}
const markers_common = {
    width: 24,
    height: 24,
    joinCluster: true,
    iconPath: require("./iconpath.jpg"),
};
const markers_label = {
    color: "#000",
    bgColor: "#fff",
    borderRadius: "3px",
    padding: 3,
    fontSize: "12px",
    textAlign: "center",
};
const markers_callout = {
    fontSize: 10,
    padding: 3,
    borderRadius: 3,
    textAlign: "center",
};
const marker_group = [
    // 地图标记点
    {
        ...markers_common,
        id: 1,
        longitude: 109.41292,
        latitude: 18.30488,
        callout: {
            ...markers_callout,
            content: "到达跟回程",
        },
        label: {
            ...markers_label,
            content: "凤凰机场",
        },
    },
    {
        ...markers_common,
        id: 2,
        longitude: 109.476268,
        latitude: 18.27456,
        callout: {
            ...markers_callout,
            content: "全天开放\n下午五点左右到即可，据说日落极美，期待出片",
        },
        label: {
            ...markers_label,
            content: "椰梦长廊",
        },
    },
    {
        ...markers_common,
        id: 3,
        longitude: 109.373649,
        latitude: 18.238401,
        callout: {
            ...markers_callout,
            content:
                "人少景美，门票90\n租一辆电动车可以环岛游<牛王岛，海上书屋，奇思妙想艺术店，路口大爱心，海角灯塔>等等打卡点",
        },
        label: {
            ...markers_label,
            content: "西岛",
        },
    },
    {
        ...markers_common,
        id: 4,
        longitude: 109.508849,
        latitude: 18.238984,
        callout: {
            ...markers_callout,
            content: "吃海鲜，逛夜市首选",
        },
        label: {
            ...markers_label,
            content: "第一市场",
        },
    },
    {
        ...markers_common,
        id: 5,
        longitude: 109.760137,
        latitude: 18.311125,
        callout: {
            ...markers_callout,
            content:
                "登录8：00 - 16：00 离岛8：30-17：30\n20分钟一趟\n早起去码头排队，海上项目提前买套票，景色也很美，缺点是岛上比较宰客",
        },
        label: {
            ...markers_label,
            content: "蜈支洲岛",
        },
    },
    {
        ...markers_common,
        id: 6,
        longitude: 109.72954,
        latitude: 18.27226,
        callout: {
            ...markers_callout,
            content: "后海村夜市，浪小，冲浪需要提前预约",
        },
        label: {
            ...markers_label,
            content: "后海村",
        },
    },
    {
        ...markers_common,
        id: 7,
        longitude: 109.20873,
        latitude: 18.29893,
        callout: {
            ...markers_callout,
            content: "南山文化旅游区，打卡点",
        },
        label: {
            ...markers_label,
            content: "南山文化旅游区",
        },
    },
    {
        ...markers_common,
        id: 8,
        longitude: 109.437123,
        latitude: 18.28712,
        callout: {
            ...markers_callout,
            content: "第一晚最后一晚首选，离机场近",
        },
        label: {
            ...markers_label,
            content: "三亚湾",
        },
    },
    {
        ...markers_common,
        id: 9,
        longitude: 109.655582,
        latitude: 18.231902,
        callout: {
            ...markers_callout,
            content: "海景房首选，小资",
        },
        label: {
            ...markers_label,
            content: "亚龙湾",
        },
    },
    {
        ...markers_common,
        id: 10,
        longitude: 109.750811,
        latitude: 18.372836,
        callout: {
            ...markers_callout,
            content:
                "cdf三亚国际免税城店\n位置：三亚市海棠区海棠北路118号\n机场提货点:提货后可以直接带上飞机，凤凰机场在14号登机口对面\n线下：海棠湾亚龙湾大部分酒店入住可享95折\n线上app购买：下载cdf离岛免税",
        },
        label: {
            ...markers_label,
            content: "cdf三亚国际免税城店",
        },
    },
];

const markers1 = [
    // 地图标记点
    marker_group[0],
    marker_group[1],
    marker_group[7],
];
const markers2 = [
    // 地图标记点
    marker_group[7],
    marker_group[2],
    marker_group[3],
];
const markers3 = [
    // 地图标记点
    marker_group[4],
    marker_group[5],
    marker_group[8],
];
const markers4 = [
    // 地图标记点
    marker_group[8],
    marker_group[9],
    marker_group[6],
    marker_group[7],
];
const markers5 = [
    // 地图标记点
    marker_group[7],
    marker_group[0],
];

const foodMarkers = [
    {
        id: 1,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.729915,
        latitude: 18.358075,
        label: {
            ...markers_label,
            content: "林姐香味海鲜",
        },
        callout: {
            ...markers_callout,
            content: "林姐香味海鲜(海棠湾店)",
        },
    },
    {
        id: 2,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.50852,
        latitude: 18.237491,
        label: {
            ...markers_label,
            content: "林姐香味海鲜",
        },
        callout: {
            ...markers_callout,
            content: "林姐香味海鲜(市区店)",
        },
    },
    {
        id: 3,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.522527,
        latitude: 18.221523,
        label: {
            ...markers_label,
            content: "林姐香味海鲜",
        },
        callout: {
            ...markers_callout,
            content: "林姐香味海鲜(大东海店)",
        },
    },
    {
        id: 4,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.620067,
        latitude: 18.245258,
        label: {
            ...markers_label,
            content: "林姐香味海鲜",
        },
        callout: {
            ...markers_callout,
            content: "林姐香味海鲜(亚龙湾博后村店)",
        },
    },
    {
        id: 5,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.430453,
        latitude: 18.291384,
        label: {
            ...markers_label,
            content: "糟粕醋海鲜火锅",
        },
        callout: {
            ...markers_callout,
            content: "太琼百年糟粕醋海鲜火锅(三亚湾店)",
        },
    },
    {
        id: 6,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.731346,
        latitude: 18.369328,
        label: {
            ...markers_label,
            content: "糟粕醋海鲜火锅",
        },
        callout: {
            ...markers_callout,
            content: "太琼百年糟粕醋海鲜火锅(海棠湾店)",
        },
    },
    {
        id: 7,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.643086,
        latitude: 18.232812,
        label: {
            ...markers_label,
            content: "糟粕醋海鲜火锅",
        },
        callout: {
            ...markers_callout,
            content: "太琼百年糟粕醋海鲜火锅(亚龙湾店)",
        },
    },
    {
        id: 8,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.50451,
        latitude: 18.25704,
        label: {
            ...markers_label,
            content: "糟粕醋海鲜火锅",
        },
        callout: {
            ...markers_callout,
            content: "太琼百年糟粕醋海鲜火锅(明珠广场店)",
        },
    },
    {
        id: 9,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.518419,
        latitude: 18.223746,
        label: {
            ...markers_label,
            content: "糟粕醋海鲜火锅",
        },
        callout: {
            ...markers_callout,
            content: "太琼百年糟粕醋海鲜火锅(大东海店)",
        },
    },
    {
        id: 10,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.508387,
        latitude: 18.238019,
        label: {
            ...markers_label,
            content: "四川小胡子海鲜",
        },
        callout: {
            ...markers_callout,
            content: "四川小胡子海鲜(总店)",
        },
    },
    {
        id: 11,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.730681,
        latitude: 18.357564,
        label: {
            ...markers_label,
            content: "四川小胡子海鲜",
        },
        callout: {
            ...markers_callout,
            content: "四川小胡子海鲜(海棠湾店)",
        },
    },
    {
        id: 12,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.484999,
        latitude: 18.269085,
        label: {
            ...markers_label,
            content: "四川小胡子海鲜",
        },
        callout: {
            ...markers_callout,
            content: "四川小胡子海鲜(三亚湾椰梦长廊店)",
        },
    },
    {
        id: 13,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.622639,
        latitude: 18.24252,
        label: {
            ...markers_label,
            content: "四川小胡子海鲜",
        },
        callout: {
            ...markers_callout,
            content: "四川小胡子海鲜(亚龙湾壹号店)",
        },
    },
    {
        id: 14,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.486865,
        latitude: 18.267569,
        label: {
            ...markers_label,
            content: "嗲嗲的椰子鸡",
        },
        callout: {
            ...markers_callout,
            content: "嗲嗲的椰子鸡(椰梦长廊店)",
        },
    },
    {
        id: 15,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.737403,
        latitude: 18.33851,
        label: {
            ...markers_label,
            content: "嗲嗲的椰子鸡",
        },
        callout: {
            ...markers_callout,
            content: "嗲嗲的椰子鸡(海棠湾店)",
        },
    },
    {
        id: 16,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.654388,
        latitude: 18.236412,
        label: {
            ...markers_label,
            content: "嗲嗲的椰子鸡",
        },
        callout: {
            ...markers_callout,
            content: "嗲嗲的椰子鸡(亚龙湾店)",
        },
    },
    {
        id: 17,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.44656,
        latitude: 18.287265,
        label: {
            ...markers_label,
            content: "嗲嗲的椰子鸡",
        },
        callout: {
            ...markers_callout,
            content: "嗲嗲的椰子鸡(三亚湾店)",
        },
    },
    {
        id: 18,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.487613,
        latitude: 18.268965,
        label: {
            ...markers_label,
            content: "琼乡阁海南菜",
        },
        callout: {
            ...markers_callout,
            content: "琼乡阁海南菜餐厅(三亚湾店)",
        },
    },
    {
        id: 19,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.608465,
        latitude: 18.242755,
        label: {
            ...markers_label,
            content: "琼乡阁海南菜",
        },
        callout: {
            ...markers_callout,
            content: "琼乡阁海南菜餐厅(亚龙湾店)",
        },
    },
    {
        id: 20,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.498714,
        latitude: 18.303892,
        label: {
            ...markers_label,
            content: "火车头海鲜广场",
        },
        callout: {
            ...markers_callout,
            content: "火车头万人海鲜广场",
        },
    },
    {
        id: 21,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.506143,
        latitude: 18.249542,
        label: {
            ...markers_label,
            content: "群众街",
        },
        callout: {
            ...markers_callout,
            content: "群众街",
        },
    },
    {
        id: 22,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.486833,
        latitude: 18.267447,
        label: {
            ...markers_label,
            content: "琼捌炒冰",
        },
        callout: {
            ...markers_callout,
            content: "琼捌炒冰(三亚湾椰梦长廊店，有很多分店)",
        },
    },
    {
        id: 23,
        ...markers_common,
        iconPath: require("./food.jpg"),
        longitude: 109.518527,
        latitude: 18.22369,
        label: {
            ...markers_label,
            content: "琼禧1987",
        },
        callout: {
            ...markers_callout,
            content: "琼禧1987.海南伴手礼(大东海店)\n地址：三亚市吉阳区海韵路18号三亚宝宏大酒店二楼大堂西面",
        },
    },
];
export default {
    day1: transformLocation(day1),
    day2: transformLocation(day2),
    day3: transformLocation(day3),
    day4: transformLocation(day4),
    day5: transformLocation(day5),
    markers1,
    markers2,
    markers3,
    markers4,
    markers5,
    getCenter,
    marker_group,
    foodMarkers,
    memberStreet,
}