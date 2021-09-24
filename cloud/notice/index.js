// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
    console.log(event, context)
    return sendTemplateMessage(event)
}
//小程序模版消息推送
async function sendTemplateMessage(event) {
    const {
        OPENID
    } = cloud.getWXContext()

    console.log(OPENID, 'OPENID');

    let datas = {
        "templateId": "JZQVqJmFNO_DMAsor9Rc1Un8AtX6ACZU_VPY4VP8uj4",
        "data": {
            "date5": {
                "value": "2021年10月1日 15:01"
            },
            "thing6": {
                "value": "点饭了吗 小张"
            },
            "character_string7": {
                "value": "YES_NO"
            }
        }
    }

    const sendResult = await cloud.openapi.subscribeMessage.send({
        // zxz: "oCYBL5OG46Km0wtiCmojbhtEkyCQ",
        // bhl: "oCYBL5B6Fn_EX6euGPOlkCMAag_4",
        touser: 'oCYBL5B6Fn_EX6euGPOlkCMAag_4' || OPENID,
        templateId: datas.templateId,
        page: 'pages/home/index',
        miniprogram_state: 'trial',
        data: datas.data
    })
    return sendResult
}