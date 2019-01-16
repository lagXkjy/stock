
Page({
  data: {
    list:[
      {
        url:"../../images/zhuangyu_03.jpg",
        text:"装运查询",
        lianjie:"../time/time",
        index:0
      },
      {
        url: "../../images/fuhui_03.jpg",
        text: "付汇查询",
        index: 1,
        lianjie: "../remittance/remittance",
      },
      {
        url: "../../images/caigou_03.jpg",
        text: "采购查询",
        index: 2,
        lianjie: "../procurement/procurement",
      },
      {
        url: "../../images/jibiexiao_03.jpg",
        text: "销售查询",
        index: 3,
        lianjie: "../Tosell/Tosell",
        
      },
      {
        url: "../../images/kuwei_03.jpg",
        text: "库位查询",
        index: 4,
        lianjie: "../Levellocation/Levellocation",
      },
      {
        url: "../../images/sun_03.jpg",
       
        text: "破损抽样溢短装",
        index: 5,
        lianjie: "../Location/Location",
      },
      {
        url: "../../images/sepal_03.jpg",
        text: "易耗品查询",
        index: 6,
        lianjie: "../contract/contract",
      },
      {
        url: "../../images/appa_10.jpg",
        text: "物流运输查询",
        index: 7,
        lianjie:"../collection/collection"
      },
      {
        url: "../../images/anQun_03.jpg",
        text: "安全退出",
        index: 8,
        lianjie: "../login/login"
      },
      // {
      //   url: "../../images/hao_03.jpg",
      //   text: "破损数量查询",
      //   index: 8,
      //   lianjie: "../broken/broken"
      // },
      // {
      //   url: "../../images/appa_10.jpg",
      //   text: "抽样数量查询",
      //   index: 9,
      //   lianjie: "../sampling/sampling"
      // }
      ]
  },
  remove:function(e){
    var that=this
    var idx = e.currentTarget.dataset.index;
    if (idx==8){
      wx.reLaunch({
        url: that.data.list[idx].lianjie,
      })
    }else{
      wx.navigateTo({
        url: that.data.list[idx].lianjie + '?index=' + idx,
      })
    }
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  onShow:function(){
    console.log(wx.getStorageSync("JianYan"))
    if (wx.getStorageSync("JianYan") == 1) {
      wx.showModal({
        title: '提示',
        content: '暂无权限',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../logs/logs',
            })
          } 
        }
      })
    }
  },
  onReady: function () {
    wx.removeStorage({
      key: 'optiontime',
      success: function (res) {
       
      }
    })
    // 
    wx.removeStorage({
      key: 'optiontime1',
      success: function (res) {
       
      }
    })
    // 
    wx.removeStorage({
      key: 'optiontime2',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'optiontime3',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'optiontime4',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'optiontime5',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'optiontime6',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'optiontime7',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'optiontime8',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num',
      success: function (res) {
       
      }
    })
    // 
    wx.removeStorage({
      key: 'num0',
      success: function (res) {
       
      }
    })
    // 
    wx.removeStorage({
      key: 'num1',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num2',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num3',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num4',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num5',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num6',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num7',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'num8',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'numq',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'allsleect',
      success: function (res) {
       
      }
    })
    //

    wx.removeStorage({
      key: 'numt',
      success: function (res) {
       
      }
    })
    //
    wx.removeStorage({
      key: 'allsleect1',
      success: function (res) {
       
      }
    })
    //
  },
})
