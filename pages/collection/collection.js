
Page({

  /**
   * 页面的初始数据
   */
  data: {

    date: "--选择时间--",
    date1: "--选择时间--",
    date2: "--选择时间--",
    date3: "--选择时间--",
    index: ""
  },

  formSubmit: function (e) {
    var that = this;
    try {
      var value = wx.getStorageSync('num7')
      if (value) {
        console.log(value)
        that.setData({
          num7: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var Speacl = '../indexResult/indexResult?timeB=' + that.data.date + '&timeS=' + that.data.date1 + '&num=' + that.data.num7 + '&index=' + that.data.index + '&SendNo=' + e.detail.value.SendNo + '&Wuliu=' + e.detail.value.Wuliu + '&Consignee=' + e.detail.value.Consignee + '&GoodsId=' + e.detail.value.GoodsId + '&GoodsName=' + e.detail.value.GoodsName + '&Brand=' + e.detail.value.Brand + '&Paking=' + e.detail.value.Paking + '&ConnectMan=' + e.detail.value.ConnectMan + '&Tel=' + e.detail.value.Tel + '&Address=' + e.detail.value.Address + '&GetDateB=' + that.data.date2 + '&GetDateS=' + that.data.date3 
    Speacl = Speacl.replace(/\%/g, "·");
    wx.navigateTo({
      url: Speacl
    })
  },
  xuaXiang: function () {
    var that = this
    console.log(123)
    wx.navigateTo({
      url: '../../optionall/optiontime/optiontime?index=' + that.data.index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options.content)
    that.setData({
      index: options.index
    })
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  bindDateChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date3: e.detail.value
    })
  },
  // 清除时间
  cancel: function (e) {

    this.setData({
      date: "--选择时间--"
    })
  },
  cancel1: function (e) {

    this.setData({
      date1: "--选择时间--"
    })
  },
  cancel2: function (e) {

    this.setData({
      date2: "--选择时间--"
    })
  },
  cancel3: function (e) {

    this.setData({
      date3: "--选择时间--"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})