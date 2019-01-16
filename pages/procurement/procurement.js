
Page({

  /**
   * 页面的初始数据
   */
  data: {

    date: "--选择时间--",
    date1: "--选择时间--",
    date2: "--选择时间--",
    date3: "--选择时间--",
    date4: "--选择时间--",
    date5: "--选择时间--",
    index: ""
  },

  formSubmit: function (e) {
    var that = this;
    try {
      var value = wx.getStorageSync('num2')
      if (value) {
        console.log(value)
        that.setData({
          num2: value
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    //  付汇查询
    var Speacl = '../indexResult/indexResult?timeB=' + that.data.date + '&timeS=' + that.data.date1 + '&num=' + that.data.num2 + '&index=' + that.data.index + '&PNo=' + e.detail.value.PNo + '&Supplier=' + e.detail.value.Supplier + '&OriginCountry=' + e.detail.value.OriginCountry + '&GoodsName=' + e.detail.value.GoodsName + '&Level=' + e.detail.value.Level + '&Alcoholcontent=' + e.detail.value.Alcoholcontent + '&nimfen=' + that.data.date2 + '&WinePer=' + e.detail.value.WinePer + '&WineSor=' + e.detail.value.WineSor + '&WineBottle=' + e.detail.value.WineBottle + '&GrapeType=' + e.detail.value.GrapeType + '&Flavor=' + e.detail.value.Flavor + '&Productionbatch=' + e.detail.value.Productionbatch + '&date2=' + e.detail.value.nian+ "&date4=" + that.data.date4 + "&date5=" + that.data.date5 + '&GoodsId=' + e.detail.value.GoodsId
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
  bindDateChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date4: e.detail.value
    })
  },
  bindDateChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date5: e.detail.value
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
  cancel4: function (e) {

    this.setData({
      date4: "--选择时间--"
    })
  },
  cancel5: function (e) {

    this.setData({
      date5: "--选择时间--"
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