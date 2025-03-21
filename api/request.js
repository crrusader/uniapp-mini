const errorCodeMap = {
  1: "服务器内部错误",
  3: "业务相关错误",
  1001: "接口认证失败",
  1002: "积分不足",
  1003: "参数错误",
  1004: "词条中涉及敏感词汇，禁止提交任务",
  1005: "任务数达到上限，请等在运行中的任务完成后再进行提交",
};

// post请求封装
function postRequest(url, data, method, showToast = true) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      data: data,
      method: method || "POST",
      header: {
        "content-type": "application/json;charset=UTF-8",
        Authorization: wx.getStorageSync("token"),
      },
      success: function (res) {
        if (showToast && res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg || errorCodeMap[res.data.code] || "请求异常",
            icon: "none",
          });
        }
        resolve(res);
      },
      error: function (e) {
        reject("网络出错");
      },
    });
  });
}

// get请求封装
function getRequest(url, data) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      data: data,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: wx.getStorageSync("token"),
      },
      success: function (res) {
        resolve(res);
      },
      error: function (e) {
        reject("网络出错");
      },
    });
  });
}

module.exports = {
  postRequest,
  getRequest,
};
