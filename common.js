var host = "wx9kc.1-zhao.com"
var config = {

  //下面的地址配合云端 Server 工作
  host,
  // 登录
  Login: `https://${host}/api/Login/CheckUser`,
  // 破损数量查询
  Numberofdamageenquiries: `https://${host}/Api/CheckNum/List`,
  //报检
  SearchCompanybyopenidUrl1: `https://${host}/api/CheckOut/JyCheckQuery`,
  //检验检疫查询
  SearchCompanybyopenidUrl: `https://${host}/api/CheckOut/YjCheckQuery`,
 
  //装运查询
  Shipmentquery: `https://${host}/api/StockInfo/SelectMoveShip`,
  // 付汇查询
  Dateofremittance: `https://${host}/api/StockInfo/SelectPaymentInfo`,
  // 采购合同
  Thepurchaseorder: `https://${host}/api/StockInfo/SelectProInfo`,
  // 级别销售查询
  Levelsalesenquiries: `https://${host}/api/StockInfo/SelectSaleinfo`,
  //库位号
  Inventorylevelquery: `https://${host}/api/StockInfo/SelectStockInleOrst`,
  
  //破损抽样短溢装
  Inventorylevelquery2: `https://${host}/api/Break/Index`,
  // 运输查询
  Receivingaquery: `https://${host}/api/Transport/List`,
  // 易耗品查询
  Thecontractofsale: `https://${host}/api/Consumable/List`,

};
function sayHello(name) {
  wx.showModal({
    title: "提示",
    content: name,
    confirmText: "确定",
    cancelText: "取消",
    success: function (res) {
      if (res.confirm) {
        console.log("用户点击确定")
      }
    }
  })
}
function loading(data, msg) {
  wx.showToast({
    title: '加载中',
    icon: 'loading',
    mask: true,
    duration: 500
  })
}
function DoSuccess(data) {
  wx.showToast({
    title: data,
    icon: "success",
    duration: 2000
  })
}
function modalTap(data) {
  wx.showModal({
    title: "提示信息",
    content: data,
    showCancel: false,
    confirmText: "确定"
  })
}
function setStorage(key, data) {
  wx.setStorage({
    key: key,
    data: data
  })
}
function getStorage(key, cb) {
  wx.getStorage({
    key: key,
    success: function (res) {
      typeof cb == "function" && cb(res)
    }
  })
}
function setStorageSync(key, data) {
  wx.setStorageSync(key, data)
}
function cancel(){
  
}
module.exports.config = config
exports.setStorage = setStorage
exports.getStorage = getStorage
exports.setStorageSync = setStorageSync
exports.loading = loading
exports.DoSuccess = DoSuccess
exports.modalTap = modalTap