// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    
    // 登录
    wx.login()
  },
  globalData: {
    userInfo: null
  }
})
