var all;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showQQ:true,
    date: "--选择时间--",
    date1: "--选择时间--",
    date2: "--选择时间--",
    date3: "--选择时间--",
    content:""
  },
  bindKeyInput: function (e) {
    this.setData({
      showQQ: false,
      inputValue: e.detail.value
    })
  },
  formSubmit: function (e) {
    var that = this;
    if(all==0){
      try {
        var value = wx.getStorageSync('numq')
        if (value) {
          console.log(value)
          that.setData({
            numq: value
          })
        }
      } catch (e) {
        // Do something when catch error
      }
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      var Speacl = '../result/result?timeB=' + that.data.date + '&timeS=' + that.data.date1 + '&num=' + that.data.numq + '&content=' + that.data.content + '&CheckoutID=' + e.detail.value.CheckoutID + '&guojia=' + e.detail.value.guojia + '&GoodName=' + e.detail.value.GoodName + '&shouhuorn=' + e.detail.value.shouhuorn;
      // Speacl = Speacl.replace(/\%/g, "·");
      console.log(Speacl)
      wx.navigateTo({
        url: Speacl
      })
    }
    if (all == 1) {
      try {
        var value = wx.getStorageSync('numt')
        if (value) {
          console.log(value)
          that.setData({
            numt: value
          })
        }
      } catch (e) {
        // Do something when catch error
      }
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      var Speacl = '../result/result?timeB=' + that.data.date + '&timeS=' + that.data.date1 + '&num=' + that.data.numt + '&content=' + that.data.content + '&InspectionID=' + e.detail.value.InspectionID + '&guojia=' + e.detail.value.guojia + '&GoodName=' + e.detail.value.GoodName + '&date2=' + that.data.date2 + '&date3=' + that.data.date3 + '&Chinese=' + e.detail.value.Chinese + '&Brand=' + e.detail.value.Brand + '&Consignee=' + e.detail.value.Consignee + '&CheckoutID=' + e.detail.value.CheckoutID
      Speacl = Speacl.replace(/\%/g, "·");
      wx.navigateTo({
        url: Speacl
      })
    }
  
  },

  xuaXiang: function () {
    var that = this
    console.log(123)
    if (that.data.content==0){
      wx.navigateTo({
        url: '../allOptions/allOptions?content=' + that.data.content,
      })
    }
    if (that.data.content == 1) {
      wx.navigateTo({
        url: '../allOptionsO/allOptions?content=' + that.data.content,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    console.log(options.content)
    that.setData({
      content: options.content
    })
    all = options.content
    if (all==0){
      wx.setNavigationBarTitle({ title: '预检验检疫' })
    }
   
    
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
  ClearTime:function(){
    
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