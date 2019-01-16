// Option.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
     list: [
      {
         name: "报检日期",
        select: true,
        index: 0
      },
      {
        name: "预检验检疫单编码",
        select: true,
        index: 1
      },
      {
        name: "检验检疫单编码",
        select: true,
        index: 2
      },
      {
        name: "收货人",
        select: true,
        index: 3
      },
      {
        name: "货物ID",
        select: true,
        index: 4
      },
      {
        name: "货物名称",
        select: true,
        index: 5
      },
      {
        name: "生产商",
        select: true,
        index: 6
      },
      {
        name: "原产国",
        select: true,
        index: 7
      },
      {
        name: "原产地证号",
        select: true,
        index: 8
      },
      {
        name: "中国代理商",
        select: true,
        index: 9
      },
      {
        name: "品牌",
        select: true,
        index: 10
      },
      {
        name: "报检瓶数",
        select: true,
        index: 11
      },
      {
        name: "报检箱数",
        select: true,
        index: 12
      },
      {
        name: "报检升数",
        select: true,
        index: 13
      },
      {
        name: "报检货物总值",
        select: true,
        index: 14
      },
      {
        name: "币种",
        select: true,
        index: 15
      },
      {
        name: "标签备案号",
        select: true,
        index: 16
      },
      {
        name: "出证日期",
        select: true,
        index: 17
      },
    ],
    allselect: "true",
  },
  // 多选
  select: function (e) {
    var idx = e.currentTarget.dataset.index;
    this.data.list[idx].select = !this.data.list[idx].select;
    for (var i = 0; i < this.data.list.length; i++) {
      if (this.data.list[i].select == true) {
        this.data.allselect = true
      }
    }
    this.setData({
      list: this.data.list,
      allselect: this.data.allselect
    })
  },
  allselect: function (e) {

    var selectedAllStatus = this.data.allselect;

    var list = this.data.list;



    selectedAllStatus = !selectedAllStatus;

    for (var i = 0; i < list.length; i++) {

      list[i].select = selectedAllStatus;

    }

    this.setData({

      list: list,

      allselect: selectedAllStatus

    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      content: options.content
    })
    // 判断
    if (options.content == 1) {
      wx.getStorage({
        key: "allsleect1",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        }
      })
    }
  },
  // 点击确定
  navto: function () {
    var that = this
    var newlist = []
    for (var i = 0; i < this.data.list.length; i++) {
      if (!this.data.list[i].select) {
        newlist.push(this.data.list[i].index)
      }
    }

    wx.setStorage({
      key: "numt",
      data: newlist,
    })

    if (that.data.content == 1) {
      wx.setStorage({
        key: "allsleect1",
        data: [that.data],
      })
    }
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