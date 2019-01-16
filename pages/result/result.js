// result.js
var common = require("../../common.js");
console.log(common)
var page=1;
var all;
var inag;
var urlList = common.config.SearchCompanybyopenidUrl;
var urlList1 = common.config.SearchCompanybyopenidUrl1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowpage:1,
    Colums:"",
    top: "预报检日期",
    top1: "预检验检疫单编码",
    top2: "报检日期",
    top3: "检验检疫单编码",
    top4: "预检验检疫单编码",
    date: "2017-08-01",
    dateq: "2017-08-01",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    all = options
    page=1
    if (options.date2 == "--选择时间--") {
      options.date2 = "";
    }
    if (options.timeB == "--选择时间--") {
      options.timeB = "";
    }
    if (options.timeS == "--选择时间--") {
      options.timeS = "";
    }
    if (options.date3 == "--选择时间--") {
      options.date3 = "";
    }
    var urlList = common.config.SearchCompanybyopenidUrl
    var that=this;
    that.setData({
      num:options.num,
      content: options.content,
      ForecastBegin:options.timeB,
      ForecastEnd:options.timeS,
      CheckoutID:options.coding,
      InspectionID: options.coding,
      GoodName: options.GoodName,
      bianma: options.bianma,
      guojia: options.guojia,
      Query: options.Query,
    })
    console.log(options)
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask:true,
      duration: 1000
    })


    if (options.content == 0) {
      this.jiazao()
    
    }

    if (options.content == 1) {

    this.jiazao2()
    console.log(123)

  }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  jiazao2:function(){
    var that=this;
    
    var data = {
      num: all.num, content: all.content, InspectionBegin: all.timeB, InspectionEnd: all.timeS, Origin: all.guojia, GoodsId: all.GoodName, CheckoutID: all.CheckoutID, CzDateBe: all.date2, CzDateEn: all.date3, page: page, InspectionID: all.InspectionID, Consignee: all.Consignee, Brand: all.Brand, Chinese: all.Chinese
    }
    
  
    console.log(data)
    wx.request({
      url: urlList1,
      method: "post",
      data:data,
      success: function (res) {
        console.log(res)
        var jison = JSON.parse(res.data.Code)
        console.log(res.data.SumCount)
        var Colums = Math.ceil(res.data.SumCount / 15)
        if (Colums==0){
          Colums = 1
        }
        that.setData({
          list: jison,
          nowpage: page,
          Colums: Colums
        })
      },
      fail: function (res) {
        common.modalTap("网络出错！！")
      }
    })
  },
  jiazao:function(){
    var that = this
    var data = {
      num: all.num, ForecastBegin: all.timeB, ForecastEnd: all.timeS, Origin: all.guojia, GoodsId: all.GoodName, CheckoutID: all.CheckoutID, Consignee: all.shouhuorn, page: page
    }
    

    console.log(data)
    wx.request({
      url: urlList,
      method: "get",
      data: data,
      success: function (res) {
        console.log(res.data.Code)
        var jison = JSON.parse(res.data.Code)
        var Colums = Math.ceil(res.data.SumCount / 15)
        that.setData({
          list: jison,
          nowpage:page,
          Colums: Colums
        })
      },
      fail: function (res) {
        common.modalTap("网络出错！！")
      }
    })
  },

  //---
  xiayiye:function(){
    var that = this
    page++
    
    if (page >= that.data.Colums){
      page = that.data.Colums
    }
    if (all.content == 0) {
      common.loading()
     this.jiazao()
    }
    if (all.content == 1) {
      common.loading()
      this.jiazao2()
    }
  },
//++++
  shangyi: function () {
    var that = this
    page--
    if (page <= 0) {
      page = 1;
      return
    }
    if (all.content == 0) {
      common.loading()
      this.jiazao()
    }
    if (all.content == 1) {
      common.loading()
      this.jiazao2()
    }
  },
//输入
  shuru:function(e){
    var that=this
    inag = e.detail.value
    if (inag > that.data.Colums) {
      inag = that.data.Colums;
    }
    if (inag <= 0) {
      inag = 1;
    }
  },
  suosuo:function(){
    if (all.content == 0){
      console.log(123)
      common.loading()
      page = inag
      this.jiazao()
      
    }
    if (all.content == 1) {
      common.loading()
      page = inag
      this.jiazao2()
    }
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