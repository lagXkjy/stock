// pages/login/login.js
var common=require("../../common.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    password:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('name')!=""){
      this.setData({
        name: wx.getStorageSync('name')
      })
    }
    if (wx.getStorageSync('password') != "") {
      this.setData({
        password: wx.getStorageSync('password')
      })
    }
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx.showToast({
      title: '登录中',
      icon: 'loading',
      mask: true,
      duration: 2000
    })
    wx.request({
      url: common.config.Login,
      method:"post",
      data: {
        username: e.detail.value.name,
        upassword: e.detail.value.passWord
      },
      success:function(res){
       
        console.log(res)
        if (res.data.Code){
        //  开始
          wx.setStorage({
            key: 'name',
            data: e.detail.value.name,
          })
          wx.setStorage({
            key: 'password',
            data: e.detail.value.passWord,
          })
        // 缓存
          if(res.data.IScheck==1){
            wx.setStorage({
              key: 'JianYan',
              data: "1",
            })
            wx.switchTab({
              url: '../logs/logs',
            })
          }else{
            wx.setStorage({
              key: 'JianYan',
              data: "",
            })
            wx.switchTab({
            url: '../index/index',
           })
          }
          // 判断
        }else{
          wx.showToast({
            title: res.data.msg,
            duration: 1000
          })
        }
      }
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