/**
 *	转换金额
 * @param {String} value
 * @param {Boolean} noFloat 无需小数位补0
 */
const numFormat = (value, noFloat = false) => {
    if (!value || isNaN(value)) return '0.00';
    value = String(value)
    let num = null,
        intPart = Math.trunc(Number(value)), //获取整数部分
        intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'), //将整数部分逢三一断
        floatPart = ".00",
        value2Array = value.split(".");
    if (noFloat) {
        num = intPartFormat
        if (value2Array.length == 2) {
            floatPart = value2Array[1].toString(); //拿到小数部分
            num = intPartFormat + "." + floatPart;
        }
    } else {
        //2表示数据有小数位
        if (value2Array.length == 2) {
            floatPart = value2Array[1].toString(); //拿到小数部分
            if (floatPart.length == 1) {
                //补0
                num = intPartFormat + "." + floatPart + '0';
            } else {
                num = intPartFormat + "." + floatPart;
            }
        } else {
            num = intPartFormat + floatPart;
        }
    }
    return num;
}

export {
    numFormat,
};