// result.js
var common = require("../../common.js");
var page = 1;
var all;
var inag=1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowpage: 1,
    list: [
      
    ]
  },
// 第一
  jiekou0:function(){
    var that = this
    var data = {
      HavePort: all.HavePort,

      Rno: all.Rno,
      ShipName: all.ShipName,
      Shipment: all.Shipment,
      ZBdate: all.timeB,
      ZEdate: all.timeS,
      DBdate: all.date2,
      DEdate: all.date3,
      NeedCount: all.num,
      page: page}
    console.log(data)
    console.log(1)
    wx.request({
      url: common.config.Shipmentquery,
      data: data,
      success: function (res) {
        console.log(res.data)
        var jison = JSON.parse(res.data.Code)
        var Colums = Math.ceil(res.data.SumCount / 15)
        if (Colums == 0) {
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
  // 第二
jiekou1:function(){
  var that = this
  var data = {
    Supplier: all.gonghuoshang,
    PNo: all.heitong,
    FBdate: all.timeB,
    FEdate: all.timeS,
    NeedCount: all.num,
    GoodsName: all.mingcheng.replace(/\·/g, "%"),
    page: page
  }
  console.log(data)
  console.log(2)
  wx.request({
    url: common.config.Dateofremittance,
    data: data,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou2:function(){  
  var that=this
  var data = {
    GoodsId:all.GoodsId,
    Alcoholcontent: all.Alcoholcontent,
    PNo: all.PNo,
    Flavor: all.Flavor,
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    PBTime: all.timeB,
    PETime: all.timeS,
    BYear: all.date2,
    NeedCount: all.num,
    GrapeType: all.GrapeType,
    Level: all.Level,
    OriginCountry: all.OriginCountry,
    Productionbatch: all.Productionbatch,
    Supplier: all.Supplier,
    WineBottle: all.WineBottle,
    WinePer: all.WinePer,
    WineSor: all.WineSor,
    PDBDate: all.date4,
    PDEDate: all.date5,
    page: page
  }
  console.log(data)
  console.log(3)
  wx.request({
    url: common.config.Thepurchaseorder,
    data: data,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou3:function(){
  var that=this
  var data = {
    GoodsId: all.GoodsId,
    BYear: all.timeB,
    NeedCount: all.num,
    Alcoholcontent: all.Alcoholcontent,
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    Level: all.Level,
    ProNo: all.Pno,
    SNo: all.Sno,
    WineBottle: all.WineBottle,
    WinePer: all.WinePer,
    WineSor: all.WineSor,
    page: page,
    Trademark: all.Trademark,
  }
  console.log(data)
  console.log(4)
  wx.request({
    url: common.config.Levelsalesenquiries,
    data: data ,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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

jiekou4:function(){
  var that=this
  var data = {
    GoodsId:all.GoodsId,
    BYear: all.timeB,
    NeedCount: all.num,
    Alcoholcontent: all.Alcoholcontent,
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    Level: all.Level,
    ProNo: all.ProNo,
    SNo: all.SNo,
    WineBottle: all.WineBottle,
    WinePer: all.WinePer,
    WineSor: all.WineSor,
    page: page,
  }
  console.log(data)
  console.log(5)
  wx.request({
    url: common.config.Inventorylevelquery,
    data: data,
    success: function (res) {
      console.log(res.data)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou5:function(){
  var that=this
  var data = {
    GoodsId:all.GoodsId,
    Year: all.Year,
    num: all.num,
    Grape: all.Grape,
    Alcoholcontent: all.Alcoholcontent.replace(/\·/g, "%"),
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    Leavel: all.Level,
    Flover: all.Flover,
    Winebox: all.WineBottle,
    Wineper: all.WinePer,
    Winesor: all.WineSor,
    page: page
  }
  console.log(data)
  console.log(6)
  wx.request({
    url: common.config.Inventorylevelquery2,
    data: data,
    success: function (res) {
      console.log(res.data)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou6:function(){
  var that=this
  var data = {
    OrderNO: all.OrderNO,
    Creater: all.Creater,
    GoodsId: all.GoodsId,
    GoodsName: all.GoodsName,
    num: all.num,
    OrderTimeB: all.timeB,
    OrderTimeS: all.timeS,
    BreakNum: all.BreakNum,
    BreakSumv: all.BreakSumv,
    BreakCheck: all.BreakCheck,
    StoreNum: all.StoreNum,
    UseTimeB: all.date2,
    UseTimeS: all.date3,
    page: page
  }
  console.log(data)
  console.log(7)
  wx.request({
    url: common.config.Thecontractofsale,
    data: data ,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou7:function(){
  var that=this
  var data = {
    SendNo: all.SendNo,
    SendTime: all.SendTime,
    Wuliu: all.Wuliu,
    Consignee: all.Consignee,
    GoodsId: all.GoodsId,
    Brand: all.Brand,
    Paking: all.Paking,
    ConnectMan: all.ConnectMan,
    Tel: all.Tel,
    Address: all.Address,
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    num: all.num,
    SendTimeB: all.timeB,
    SendTimeS: all.timeS,
    GetDateB: all.GetDateB,
    GetDateS: all.GetDateS,
    page: page
  }
  console.log(data)
  console.log(8)
  wx.request({
    url: common.config.Receivingaquery,
    data: data,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou8:function(){
  var that=this
  var data = {
    Year: all.Year,
    WineSor: all.WineSor,
    WinePer: all.WinePer,
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    NeedCount: all.num,
    WineBottle: all.WineBottle,
    GrapeType: all.GrapeType,
    BreakNum: all.BreakNum,
    page: page,

  }
  console.log(data)
  console.log(9)
  wx.request({
    url: common.config.Numberofdamageenquiries,
    data: data,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
jiekou9:function(){
  var that=this
  var data = {
    Alcoholcontent: all.Alcoholcontent,
    WineSor: all.WineSor,
    WinePer: all.WinePer,
    GoodsName: all.GoodsName.replace(/\·/g, "%"),
    num: all.num,
    WineBottle: all.WineBottle,
    GrapeType: all.GrapeType,
    Flavor: all.Flavor,
    kuWeiNo: all.kuWeiNo,
    HetonNo: all.HetonNo,
    HaveBnum: all.HaveBnum,
    content: 1,
    page: page
  }
  console.log(data)
  console.log(10)
  wx.request({
    url: common.config.Numberofdamageenquiries,
    data:data ,
    success: function (res) {
      console.log(res.data.Code)
      var jison = JSON.parse(res.data.Code)
      var Colums = Math.ceil(res.data.SumCount / 15)
      if (Colums == 0) {
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
  // 
  //---
  xiayiye: function () {
    var that = this
    page++
    
    if (page >= that.data.Colums) {
      page = that.data.Colums
    }
    if (all.index == 0) {
      common.loading()
      this.jiekou0()
    }
    if (all.index == 1) {
      common.loading()
      this.jiekou1()
    }
    if (all.index == 2) {
      common.loading()
      this.jiekou2()
    }
    if (all.index == 3) {
      common.loading()
      this.jiekou3()
    }
    if (all.index == 4) {
      common.loading()
      this.jiekou4()
    }
    if (all.index == 5) {
      common.loading()
      this.jiekou5()
    }
    if (all.index == 6) {
      common.loading()
      this.jiekou6()
    }
    if (all.index == 7) {
      common.loading()
      console.log(111)
      this.jiekou7()
    }
    if (all.index == 8) {
      common.loading()
      this.jiekou8()
    }
    if (all.index ==9) {
      common.loading()
      this.jiekou9()
    }
  },
  //++++
  shangyi: function () {
    var that = this
    page--
    if (page <= 0) {
      page=1
      return
    }
    if (all.index == 0) {
      common.loading()
      this.jiekou0()
    }
    if (all.index == 1) {
      common.loading()
      this.jiekou1()
    }
    if (all.index == 2) {
      common.loading()
      this.jiekou2()
    }
    if (all.index == 3) {
      common.loading()
      this.jiekou3()
    }
    if (all.index == 4) {
      common.loading()
      this.jiekou4()
    }
    if (all.index == 5) {
      common.loading()
      this.jiekou5()
    }
    if (all.index == 6) {
      common.loading()
      this.jiekou6()
    }
    if (all.index == 7) {
      common.loading()
      this.jiekou7()
    }
    if (all.index == 8) {
      common.loading()
      this.jiekou8()
    }
    if (all.index == 9) {
      common.loading()
      this.jiekou9()
    }
  },
  //输入
  shuru: function (e) {
    var that = this
    inag = e.detail.value
    if (e.detail.value=="undefined"){
      inag=1
    }
    if (inag > that.data.Colums) {
      inag = that.data.Colums;
    }
    if (inag <= 0) {
      inag = 1;
    }
  },
  suosuo: function () {
    if (all.index == 0) {
      common.loading()
      page = inag
      this.jiekou0()
    }
    if (all.index == 1) {
      common.loading()
      page = inag
      this.jiekou1()
    }
    if (all.index == 2) {
      common.loading()
      page = inag
      this.jiekou2()
    }
    if (all.index == 3) {
      common.loading()
      page = inag
      this.jiekou3()
    }
    if (all.index == 4) {
      common.loading()
      page = inag
      this.jiekou4()
    }
    if (all.index == 5) {
      common.loading()
      page = inag
      this.jiekou5()
    }
    if (all.index == 6) {
      common.loading()
      page = inag
      this.jiekou6()
    }
    if (all.index == 7) {
      common.loading()
      page = inag
      this.jiekou7()
    }
    if (all.index == 8) {
      common.loading()
      page = inag
      this.jiekou8()
    }
    if (all.index == 9) {
      common.loading()
      page = inag
      this.jiekou9()
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    page=1
    all=options
    var that = this;
    if (options.timeB == "--选择时间--"){
      options.timeB=""
    }
    if (options.timeS == "--选择时间--") {
      options.timeS = ""
    }
    if (options.date2 == "--选择时间--") {
      options.date2 = ""
    }
    if (options.date3 == "--选择时间--") {
      options.date3 = ""
    }
    if (options.date4 == "--选择时间--") {
      options.date4 = ""
    }
    if (options.date5 == "--选择时间--") {
      options.date5 = ""
    }
    if (options.GetDateB == "--选择时间--") {
      options.GetDateB = ""
    }
    if (options.GetDateS == "--选择时间--") {
      options.GetDateS = ""
    }
    if (options.num == "undefined") {
      options.num = ""
    }
    
    that.setData({
      date: options.timeB,
      dateq: options.timeS,
    })
    console.log(options)
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
      duration: 1000
    })
    
    if (options.index == 0) {
      this.jiekou0()
    }
    
    if (options.index == 1) {
      this.jiekou1()
    }

    if (options.index == 2) {
      this.jiekou2()
    }

    if (options.index == 3) {
      this.jiekou3()
    }
    if (options.index == 4) {
      console.log(common.config.Inventorylevelquery)
      this.jiekou4()
    }
    if (options.index == 5) {
      console.log(common.config.Inventorylevelquery)
      this.jiekou5()
    }
    if (options.index == 6) {
     this.jiekou6()
    }
    if (options.index == 7) {
     this.jiekou7()
    }
    if (options.index ==8) {
     this.jiekou8()
    }


if (options.index == 9) {
 this.jiekou9()
}
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