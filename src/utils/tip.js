/**
 * 提示与加载工具类
 */
export default class Tips {
  constructor() {
    this.isLoading = false;
  }

  /**
   * 提示框
   * @param {String} title 标题
   * @param {Number} duration 停留时间,默认 500 毫秒
   */
  static success(title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: "success",
        mask: true,
        duration: duration
      });
    }, 300);
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
  }

  /**
   * 确认窗口
   * @param {String} text 确认文本
   * @param {JSON} payload 有效载荷
   * @param {String} title 标题
   */
  static confirm(text, payload = {}, title = "提示") {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload);
          } else if (res.cancel) {
            reject(payload);
          }
        },
        fail: res => {
          reject(payload);
        }
      });
    });
  }

  /**
   * 祝贺提示
   * @param {String} title 祝贺标题
   * @param {Function} onHide 回调函数
   * @param {String} icon 图标类型字符串
   */
  static toast(title, onHide, icon = "success") {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
    }, 300);

    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 警告提示
   * @param {String} title 警告标题
   */
  static alert(title) {
    wx.showToast({
      title: title,
      image: "../images/alert.png",
      mask: true,
      duration: 500
    });
  }

  /**
   * 错误提示
   * @param {String} title 错误标题
   * @param {Function} onHide 回调函数
   */
  static error(title, onHide) {
    wx.showToast({
      title: title,
      image: "../images/error.png",
      mask: true,
      duration: 500
    });
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 加载提示
   * @param {String} title 标题字符串,默认 "加载中"
   */
  static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }

  /**
   * 分享
   * @param {String} title 标题
   * @param {String} url 链接 URL
   * @param {String} desc 描述
   */
  static share(title, url, desc) {
    return {
      title: title,
      path: url,
      desc: desc,
      success: function(res) {
        Tips.toast("分享成功");
      }
    };
  }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;
