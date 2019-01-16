//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    list:[
      {
        url:"../../images/riqi_03.jpg",
        title:" 预报检查询",
        index:0
      },
      {
        url: "../../images/baojian_08.jpg",
        title: " 报检查询",
        index: 1
      },
      {
        url: "../../images/anQun_03.jpg",
        title: " 安全退出",
        index: 2
      }
 
      ]
  },

  tiaozhuan:function(e){
    var idx = e.currentTarget.dataset.index;
    if(idx==2){
      wx.reLaunch({
        url: '../login/login',
      })
    }else{
      wx.navigateTo({
        url: '../Forecast/Forecast?content=' + idx,
      })
    }
   
  },
  onLoad: function (options) {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(function (log) {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  },
  onReady:function(){
    wx.removeStorage({
      key: 'allsleect',
      success: function (res) {
        console.log(res.data)
      }
    })
    //

    wx.removeStorage({
      key: 'numt',
      success: function (res) {
        console.log(res.data)
      }
    })
    //
    wx.removeStorage({
      key: 'allsleect1',
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})
