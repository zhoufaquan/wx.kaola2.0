
var app = getApp();
Page({

  data: {
   c_telephone: '',
   c_pwd: ''
  },

  input_tel: function (e) {
    this.setData({
     c_telephone: e.detail.value
    })
  },

  input_pwd: function (e) {
    this.setData({
     c_pwd: e.detail.value
    })
  },

  //我用按钮绑定了一个向服务器发起请求的时间
  loginBtn: function (e) {
   wx.switchTab({
     url: '../index/index',
   })
    if (this.data.c_telephone == '' || this.data.c_pwd == '') {
      wx.showToast({
        title: '信息未填写完',
        duration: 2000
      })
    } else {
      //动态改变app.js中的全局变量
      // app.globalData.username02 = this.data.c_name;
      var that = this;
      wx.request({
        url: 'http://localhost:8080/login',
        data: {
          'c_telephone': that.data.c_telephone,
          'c_pwd': that.data.c_pwd
        },
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          var message = res.data;
          if (message == "1") {
            wx.showToast({
              title: '登录成功',
              duration: 1000
            }),
              wx.switchTab({
                url: '../index/index',
              })
          } else  {
            wx.showToast({
              title: '密码输入错误',
              duration: 1000
            })
          }
        },
        fail: function (res) {
          console.log("fail to connect");
        }
      })
    }

  }


})