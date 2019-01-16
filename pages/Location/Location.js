
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "--选择时间--",
    date1: "--选择时间--",
    index: ""
  },
  //表单提交参数传递
  formSubmit: function (e) {
    var that = this;
    try {
      var value = wx.getStorageSync('num5')
      if (value) {
        console.log(value)
        that.setData({
          num5: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // 跳转
    var Speacl = '../indexResult/indexResult?Year=' + e.detail.value.Year + '&num=' + that.data.num5 + '&index=' + that.data.index + '&Grape=' + e.detail.value.Grape + '&GoodsName=' + e.detail.value.GoodsName + '&Level=' + e.detail.value.Level + '&WinePer=' + e.detail.value.WinePer + '&WineSor=' + e.detail.value.WineSor + '&WineBottle=' + e.detail.value.WineBottle + '&GoodsId=' + e.detail.value.GoodsId + '&Flover=' + e.detail.value.Flover + '&Alcoholcontent=' + e.detail.value.Alcoholcontent
    Speacl = Speacl.replace(/\%/g, "·");
    wx.navigateTo({
      url: Speacl
    })

  },
  // 跳转到显示选项
  xuaXiang: function () {
    var that = this
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
  // 日期选择 改动 赋值
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