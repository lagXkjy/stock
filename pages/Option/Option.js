
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: "船名",
        select: false,
        index: 0
      },
      {
        name: "提单号",
        select: true,
        index: 1
      },
      {
        name: "装运港",
        select: true,
        index: 2
      },
      {
        name: "到货港",
        select: true,
        index: 3
      },
      {
        name: "到港日期",
        select: true,
        index: 4
      },
      {
        name: "到港动态",
        select: true,
        index: 5
      },
    ]
  },
  // 多选
  select:function(e){
    var idx = e.currentTarget.dataset.index;
    this.data.list[idx].select = !this.data.list[idx].select;
    this.setData({
      list: this.data.list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: "sleect",
      success: function (res) {
        if (res.data!== "") {
          console.log(res.data)
          that.setData({
           list:res.data[0]
          })
        }
      }
    })  
  },
  navto:function(){
    var newlist=[]
    for(var i=0;i<this.data.list.length;i++){
      if (!this.data.list[i].select){
        newlist.push(this.data.list[i].index)
      }
    }
    // wx.request({
    //   url: '',
    //   data: newlist
    // })
    var that = this
    wx.setStorage({
      key: "sleect",
      data: [that.data.list, newlist],
    })
    wx.navigateBack({
      delta: 1
   })
    console.log(newlist)
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