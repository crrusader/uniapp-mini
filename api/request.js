// post请求封装
function postRequest(url, data, method) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: data,
            method: method || 'POST',
            header: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': wx.getStorageSync('token'),
            },
            success: function(res) {
                resolve(res)
            },
            error: function(e) {
                reject('网络出错')
            },
        })
    })
}

// get请求封装
function getRequest(url, data) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            data: data,
            method: 'GET',
            header: {
                'content-type': 'application/json',
                'Authorization': wx.getStorageSync('token'),
            },
            success: function(res) {
                resolve(res)
            },
            error: function(e) {
                reject('网络出错')
            },
        })
    })
}

module.exports = {
    postRequest,
    getRequest,
};