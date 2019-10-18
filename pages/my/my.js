// pages/my/my.js

 const app = getApp();
Page({

  data:{
    username:''
  },

  onLoad: function (options) {
    console.log(app.globalData)
    this.setData({
      username: app.globalData.username02
    })
  },

  SininBtn02: function () {
    wx.switchTab({
      url: '../sign/sign',
    })
  },

  OutBtn: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },

   InBtn: function () {
     wx.navigateTo({
       url: '../login/login',
     })
  },

  SeainBtn: function () {
    wx.switchTab({
      url: '../search/search',
    })
  }
})