
Page({

  /**
   * 页面的初始数据
   */
  data: {

    date: "2017-08-01",
    date1: "2017-08-01",
    date2: "2017-08-01",
    date3: "2017-08-01",
    index: ""
  },

  formSubmit: function (e) {
    var that = this;
    try {
      var value = wx.getStorageSync('num9')
      if (value) {
        console.log(value)
        that.setData({
          num9: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var Speacl = '../indexResult/indexResult?HaveBnum=' + e.detail.value.HaveBnum + '&HaveBnum=' + e.detail.value.HaveBnum + '&num=' + that.data.num9 + '&index=' + that.data.index + '&HetonNo=' + e.detail.value.HetonNo + '&kuWeiNo=' + e.detail.value.kuWeiNo + '&GoodsName=' + e.detail.value.GoodsName + '&Alcoholcontent=' + e.detail.value.Alcoholcontent + '&WinePer=' + e.detail.value.WinePer + '&WineSor=' + e.detail.value.WineSor + '&WineBottle=' + e.detail.value.WineBottle + '&GrapeType=' + e.detail.value.GrapeType + '&Flavor=' + e.detail.value.Flavor
    Speacl = Speacl.replace(/\%/g, "**");
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