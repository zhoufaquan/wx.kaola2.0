Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '英语四级',
    c_name:'',
    subject:'',
    c_idcard:'',
    c_telephone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
