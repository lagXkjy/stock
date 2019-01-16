// Option.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allselect: "true"
  },
  // 多选
  select: function (e) {
    var idx = e.currentTarget.dataset.index;
    this.data.list[idx].select = !this.data.list[idx].select;
    this.setData({
      list: this.data.list
    })
  },
  // 全选
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
  // 全选

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      index: options.index
    })
    //判断
    if (options.index == 0) {
      that.setData({
        list: [
          {
            name: "装运日期",
            select: true,
            index: 0
          },
          {
            name: "船名",
            select: true,
            index: 1
          },
          {
            name: "提单号",
            select: true,
            index: 2
          },
          {
            name: "集装箱规格",
            select: true,
            index: 3
          },
          {
            name: "集装箱数量",
            select: true,
            index: 4
          },
          {
            name: "装运港",
            select: true,
            index: 5
          },
          {
            name: "到货港",
            select: true,
            index: 6
          },
          {
            name: "到港日期",
            select: true,
            index: 7
          },
          {
            name: "到港动态",
            select: true,
            index: 8
          }
        ]
      })
      wx.getStorage({
        key: "optiontime",
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
    // 
    if (options.index == 1) {
      that.setData({
        list: [
          {
            name: "付汇日期",
            select: true,
            index: 0
          },
          {
            name: "采购合同",
            select: true,
            index: 1
          },
          {
            name: "供货商",
            select: true,
            index: 2
          },
          {
            name: "货物名称",
            select: true,
            index: 3
          },
          {
            name: "付汇金额",
            select: true,
            index: 4
          },
          {
            name: "币种",
            select: true,
            index: 5
          },
          {
            name: "未付合同款",
            select: true,
            index: 6
          },
          {
            name: "付汇人",
            select: true,
            index: 7
          },
          {
            name: "收汇人",
            select: true,
            index: 8
          }
        ]
      })
      wx.getStorage({
        key: "optiontime1",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    // 
    if (options.index == 2) {
      that.setData({
        list: [
          {
            name: "采购日期",
            select: true,
            index: 0
          },
          {
            name: "货物ID",
            select: true,
            index: 1
          },
          {
            name: "采购合同",
            select: true,
            index: 2
          },
          {
            name: "供货商",
            select: true,
            index: 3
          },
          {
            name: "生产商",
            select: true,
            index: 4
          },
          {
            name: "原产国",
            select: true,
            index: 5
          },
          {
            name: "原产地证号",
            select: true,
            index: 6
          },
          {
            name: "产品品质证明",
            select: true,
            index: 7
          },
          {
            name: "货物名称",
            select: true,
            index: 8
          },
          {
            name: "进口瓶数",
            select: true,
            index: 9
          },
          {
            name: "级别",
            select: true,
            index: 10
          },
          {
            name: "酒精度",
            select: true,
            index: 11
          },
          {
            name: "年份",
            select: true,
            index: 12
          },
          {
            name: "酒帽",
            select: true,
            index: 13
          },
          {
            name: "酒塞",
            select: true,
            index: 14
          },
          {
            name: "酒瓶",
            select: true,
            index: 15
          },
          {
            name: "葡萄品种",
            select: true,
            index: 16
          },
          {
            name: "口味",
            select: true,
            index: 17
          },
          {
            name: "生产批次",
            select: true,
            index: 18
          },
          {
            name: "生产日期",
            select: true,
            index: 19
          },
          {
            name: "海运费",
            select: true,
            index: 20
          },
          {
            name: "保险费",
            select: true,
            index: 21
          },
          {
            name: "杂费",
            select: true,
            index: 22
          },
          {
            name: "单价",
            select: true,
            index: 23
          },
          {
            name: "币种",
            select: true,
            index: 24
          },
          {
            name: "价格条款",
            select: true,
            index: 25
          },
          {
            name: "汇率",
            select: true,
            index: 26
          },
          {
            name: "CIF单价",
            select: true,
            index: 27
          },
          {
            name: "完税单价",
            select: true,
            index: 28
          },
          {
            name: "完税货物总值",
            select: true,
            index: 29
          },
          {
            name: "货物总值",
            select: true,
            index: 30
          },
        ]


      })
      wx.getStorage({
        key: "optiontime2",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    // 
    if (options.index == 3) {
      that.setData({
        list: [
          {
            name: "销售日期",
            select: true,
            index: 0
          },
          {
            name: "货物ID",
            select: true,
            index: 1
          },
          {
            name: "销售合同",
            select: true,
            index: 2
          },
          {
            name: "客户",
            select: true,
            index: 3
          },
          {
            name: "货物名称",
            select: true,
            index: 4
          },
          {
            name: "品牌",
            select: true,
            index: 5
          },
          {
            name: "销售瓶数",
            select: true,
            index: 6
          },
          {
            name: "销售单价",
            select: true,
            index: 7
          },
          {
            name: "其他费用",
            select: true,
            index: 8
          },
          {
            name: "销售总价",
            select: true,
            index: 9
          },
          {
            name: "成交总价",
            select: true,
            index: 10
          },
          {
            name: "出库瓶数",
            select: true,
            index: 11
          },
          {
            name: "销售库存瓶数",
            select: true,
            index: 12
          },
          {
            name: "实际库存瓶数",
            select: true,
            index: 13
          },
          {
            name: "原产国",
            select: true,
            index: 14
          },
          {
            name: "级别",
            select: true,
            index: 15
          },
          {
            name: "酒精度",
            select: true,
            index: 16
          },
          {
            name: "年份",
            select: true,
            index: 17
          },
          {
            name: "酒帽",
            select: true,
            index: 18
          },
          {
            name: "酒塞",
            select: true,
            index: 19
          },
          {
            name: "酒瓶",
            select: true,
            index: 20
          },
          {
            name: "包装",
            select: true,
            index: 21
          },
          {
            name: "葡萄品种",
            select: true,
            index: 22
          },
          {
            name: "口味",
            select: true,
            index: 23
          },
          {
            name: "生产批次",
            select: true,
            index: 24
          },
          {
            name: "生产日期",
            select: true,
            index: 25
          },
          {
            name: "收款日期",
            select: true,
            index: 26
          },
          {
            name: "收款金额",
            select: true,
            index: 27
          },
          {
            name: "未结成交款",
            select: true,
            index: 28
          },
          {
            name: "未结合同款",
            select: true,
            index: 29
          },
        ]
      })
      wx.getStorage({
        key: "optiontime3",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    if (options.index == 4) {
      that.setData({
        list: [
          {
            name: "库位号",
            select: true,
            index: 0
          },
          {
            name: "货物ID",
            select: true,
            index: 1
          },
          {
            name: "货物名称",
            select: true,
            index: 2
          },
          {
            name: "库位瓶数",
            select: true,
            index: 3
          },
          {
            name: "级别",
            select: true,
            index: 4
          },
          {
            name: "酒精度",
            select: true,
            index: 5
          },
          {
            name: "年份",
            select: true,
            index: 6
          },
          {
            name: "酒帽",
            select: true,
            index: 7
          },
          {
            name: "酒塞",
            select: true,
            index: 8
          },
          {
            name: "酒瓶",
            select: true,
            index: 9
          },
          {
            name: "葡萄品种",
            select: true,
            index: 10
          },
          {
            name: "口味",
            select: true,
            index: 11
          },
          {
            name: "生产批次",
            select: true,
            index: 12
          },
          {
            name: "生产日期",
            select: true,
            index: 13
          },
          {
            name: "入库日期",
            select: true,
            index: 14
          },
          {
            name: "库位号",
            select: true,
            index: 15
          },
          {
            name: "入库瓶数",
            select: true,
            index: 16
          },
          {
            name: "移库日期",
            select: true,
            index: 17
          },
          {
            name: "移出库位号",
            select: true,
            index: 18
          },
          {
            name: "移入库位号",
            select: true,
            index: 19
          },
          {
            name: "移库瓶数",
            select: true,
            index: 20
          },
          {
            name: "出库日期",
            select: true,
            index: 21
          },
          {
            name: "出库库位号",
            select: true,
            index: 22
          },
          {
            name: "出库瓶数",
            select: true,
            index: 23
          },
        ]

      })
      wx.getStorage({
        key: "optiontime4",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    if (options.index == 5) {
      that.setData({
        list: [
          {
            name: "货物ID",
            select: true,
            index: 0
          },
          {
            name: "货物名称",
            select: true,
            index: 1
          },
          {
            name: "酒精度",
            select: true,
            index: 2
          },
          {
            name: "级别",
            select: true,
            index: 3
          },
          {
            name: "年份",
            select: true,
            index: 4
          },
          {
            name: "酒帽",
            select: true,
            index: 5
          },
          {
            name: "酒塞",
            select: true,
            index: 6
          },
          {
            name: "酒瓶",
            select: true,
            index: 7
          },
          {
            name: "葡萄品种",
            select: true,
            index: 8
          },
          {
            name: "口味",
            select: true,
            index: 9
          },
          {
            name: "破损瓶数",
            select: true,
            index: 10
          },
          {
            name: "溢短装瓶数",
            select: true,
            index: 11
          },
          {
            name: "抽样瓶数",
            select: true,
            index: 12
          },
          {
            name: "破损总瓶数",
            select: true,
            index: 13
          },
          {
            name: "溢短装总瓶数",
            select: true,
            index: 14
          },
          {
            name: "抽样总瓶数",
            select: true,
            index: 15
          },
        ]
      })
      wx.getStorage({
        key: "optiontime5",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })

    }
    if (options.index == 6) {
      that.setData({
        list: [
          {
            name: "订购日期",
            select: true,
            index: 0
          },
          {
            name: "订单号",
            select: true,
            index: 1
          },
          {
            name: "生产厂家",
            select: true,
            index: 2
          },
          {
            name: "商品ID",
            select: true,
            index: 3
          },
          {
            name: "商品名称",
            select: true,
            index: 4
          },
          {
            name: "订购数量",
            select: true,
            index: 5
          },
          {
            name: "单价",
            select: true,
            index: 6
          },
          {
            name: "订购总值",
            select: true,
            index:7
          },
          {
            name: "使用数量",
            select: true,
            index: 8
          },
          {
            name: "使用日期",
            select: true,
            index: 9
          },
          {
            name: "损耗数量",
            select: true,
            index: 10
          },
          {
            name: "损耗价值",
            select: true,
            index: 11
          },
          {
            name: "损耗认定人",
            select: true,
            index: 12
          },
          {
            name: "库存数量",
            select: true,
            index: 13
          },
        ]
      })
      wx.getStorage({
        key: "optiontime6",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    if (options.index == 7) {
      that.setData({
        list: [
          {
            name: "发货单号",
            select: true,
            index: 0
          },
          {
            name: "发货日期",
            select: true,
            index: 1
          },
          {
            name: "物流公司",
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
            name: "品牌",
            select: true,
            index: 6
          },
          {
            name: "瓶数",
            select: true,
            index: 7
          },
          {
            name: "箱数",
            select: true,
            index: 8
          },
          {
            name: "托盘数",
            select: true,
            index: 9
          },
          {
            name: "包装",
            select: true,
            index: 10
          },
          {
            name: "收货联系人",
            select: true,
            index: 11
          },
          {
            name: "联系电话",
            select: true,
            index: 12
          },
          {
            name: "收货地址",
            select: true,
            index: 13
          },
          {
            name: "运费单价",
            select: true,
            index: 14
          },
          {
            name: "运费总价",
            select: true,
            index: 15
          },
          {
            name: "运费支付方式",
            select: true,
            index: 16
          },
          {
            name: "收货日期",
            select: true,
            index: 17
          },
          {
            name: "破损数量",
            select: true,
            index: 18
          },
          {
            name: "退货数量",
            select: true,
            index: 19
          },
          {
            name: "短货数量",
            select: true,
            index: 20
          },
          {
            name: "补货数量",
            select: true,
            index: 21
          },
          {
            name: "备注",
            select: true,
            index: 22
          }
        ]
      })
      wx.getStorage({
        key: "optiontime7",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    if (options.index == 8) {
      that.setData({
        list: [
          {
            name: "破损数量",
            select: true,
            index: 0
          },
          {
            name: "采购合同",
            select: true,
            index: 1
          },
          {
            name: "货物名称",
            select: true,
            index: 2
          },
          {
            name: "酒精度",
            select: true,
            index: 3
          },
          {
            name: "年份",
            select: true,
            index: 4
          },
          {
            name: "酒帽",
            select: true,
            index: 5
          },
          {
            name: "酒塞",
            select: true,
            index: 6
          },
          {
            name: "酒瓶",
            select: true,
            index: 7
          },
          {
            name: "葡萄品种",
            select: true,
            index: 8
          },
          {
            name: "口味",
            select: true,
            index: 9
          }
        ]
      })
      wx.getStorage({
        key: "optiontime8",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
    if (options.index == 9) {
      that.setData({
        list: [
          {
            name: "抽样数量",
            select: true,
            index: 0
          },
          {
            name: "采购合同",
            select: true,
            index: 1
          },
          {
            name: "库位号",
            select: true,
            index: 2
          },
          {
            name: "货物名称",
            select: true,
            index: 3
          },
          {
            name: "酒精度",
            select: true,
            index: 4
          },
          {
            name: "年份",
            select: true,
            index: 5
          },
          {
            name: "酒帽",
            select: true,
            index: 6
          },
          {
            name: "酒塞",
            select: true,
            index: 7
          },
          {
            name: "酒瓶",
            select: true,
            index: 8
          },
          {
            name: "葡萄品种",
            select: true,
            index: 9
          },

          {
            name: "口味",
            select: true,
            index:10
          }
        ]
      })
      wx.getStorage({
        key: "optiontime9",
        success: function (res) {
          if (res.data[0] !== "") {
            console.log(res.data)
            that.setData({
              list: res.data[0].list,
              allselect: res.data[0].allselect
            })
          }
        },
      })
    }
  },
  // 确定
  navto: function () {
    var that = this
    var newlist = []
    for (var i = 0; i < this.data.list.length; i++) {
      if (!this.data.list[i].select) {
        newlist.push(this.data.list[i].index)
      }
    }
//储存
    wx.setStorage({
      key: "num",
      data: newlist,
    })
//判断
    if (that.data.index == 0) {
      wx.setStorage({
        key: "optiontime",
        data: [that.data],
      })
      wx.setStorage({
        key: "num0",
        data: newlist,
      })
    }
    if (that.data.index == 1) {
      wx.setStorage({
        key: "optiontime1",
        data: [that.data],
      })
      wx.setStorage({
        key: "num1",
        data: newlist,
      })
    }
    if (that.data.index == 2) {
      wx.setStorage({
        key: "optiontime2",
        data: [that.data],
      })
      wx.setStorage({
        key: "num2",
        data: newlist,
      })
    }
    if (that.data.index == 3) {
      wx.setStorage({
        key: "optiontime3",
        data: [that.data],
      })
      wx.setStorage({
        key: "num3",
        data: newlist,
      })
    }
    if (that.data.index == 4) {
      wx.setStorage({
        key: "optiontime4",
        data: [that.data],
      })
      wx.setStorage({
        key: "num4",
        data: newlist,
      })
    }
    if (that.data.index == 5) {
      wx.setStorage({
        key: "optiontime5",
        data: [that.data],
      })
      wx.setStorage({
        key: "num5",
        data: newlist,
      })
    }
    if (that.data.index == 6) {
      wx.setStorage({
        key: "optiontime6",
        data: [that.data],
      })
      wx.setStorage({
        key: "num6",
        data: newlist,
      })
    }
    if (that.data.index ==7) {
      wx.setStorage({
        key: "optiontime7",
        data: [that.data],
      })
      wx.setStorage({
        key: "num7",
        data: newlist,
      })
    }
    if (that.data.index == 8) {
      wx.setStorage({
        key: "optiontime8",
        data: [that.data],
      })
      wx.setStorage({
        key: "num8",
        data: newlist,
      })
    }
    if (that.data.index == 9) {
      wx.setStorage({
        key: "optiontime9",
        data: [that.data],
      })
      wx.setStorage({
        key: "num9",
        data: newlist,
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