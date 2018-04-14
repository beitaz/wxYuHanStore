/**
 * 获取当前时间,格式为: yyyymmddhhffss
 */
function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
  return keep; //20160614134947
}

/**
 * 对象长度
 * @param {Object} input
 */
function objLength(input) {
  var type = toString(input);
  var length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
}

/**
 * 验证是否是手机号码
 * @param {Number} number 数字
 */
function vailPhone(number) {
  let flag = false;
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (number.length != 11) {
    flag = flag;
  }else if (!myreg.test(number)) {
    flag = flag;
  }else{
    flag = true;
  }
  return flag;
}

/**
 * 验证是否手机(1开头 11位数)
 * @param {Number} number
 */
function ifMobile(number) {
  let flag = false;
  let myreg = /^1(\d+){10}$/;
  if (number.length != 11) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}

/**
 * 浮点型除法
 * @param {Number} a 被除数
 * @param {Number} b 除数
 */
function div(a, b) {
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) { }
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) { }
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}

/**
 * 浮点型加法函数
 * @param {Number} arg1 被加数
 * @param { Number} arg2 加数
 */
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return ((arg1 * m + arg2 * m) / m).toFixed(2);
}

/**
 * 浮点型乘法
 * @param {Number} a 被乘数
 * @param {Number} b 乘数
 */
function mul(a, b) {
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) { }
  try {
    c += e.split(".")[1].length;
  } catch (f) { }
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

/**
 * 遍历对象属性和值
 * @param {Object} obj 需要遍历的对象
 */
function displayProp(obj) {
  var names = "";
  for (var name in obj) {
    names += name + obj[name];
  }
  return names;
}

/**
 * 去除字符串所有空格
 * @param {String} txt 需要去除空格的字符串
 */
function sTrim(txt) {
  return txt.replace(/\s/ig, '')
}

/**
 * 去除所有冒号
 * @param {String} txt 需要去除所有冒号的字符串
 */
function replaceMaohao(txt) {
  return txt.replace(/\:/ig, '')
}

/**
 * 将分数转换为星星
 * @param {Number} score 评分数
 */
function convertStarArray(score) {
  //1 全星,0 空星,2半星
  var arr = []
  for (var i = 1; i <= 5; i++) {
    if (score >= i) {
      arr.push(1)
    } else if (score > i-1 && score < i + 1) {
      arr.push(2)
    } else {
      arr.push(0)
    }
  }
  return arr
}

export default {
  getCurrentTime,
  objLength,
  displayProp,
  sTrim,
  replaceMaohao,
  vailPhone,
  ifMobile,
  div,
  mul,
  accAdd,
  convertStarArray
}
