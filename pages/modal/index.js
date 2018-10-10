// pages/modal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true, //默认隐藏confirm模态框
    alertHidden: true, //默认隐藏alert模态框
    slotHidden: true, //默认隐藏slot自定义模态框
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * 弹出模态框弹窗 
   */
  openConfirm: function() {
    this.setData({
      modalHidden: false
    })
  },
  /**
   * 模态框点击确定按钮 
   */
  modalClickConfirm: function() {
    wx.showToast({
      title: '您点击了主操作按钮',
      icon: 'none'
    })
    this.setData({
      modalHidden: true
    })
  },
  /**
   * 模态框点击取消按钮 
   */
  modalClickCancel: function() {
    wx.showToast({
      title: '您点击了辅操作按钮',
      icon: 'none'
    })
    this.setData({
      modalHidden: true
    })
  },
  /**
   * 打开alert弹窗 
   */
  openAlert: function() {
    this.setData({
      alertHidden: false
    })
  },
  /**
   * alert弹窗点击确定
   */
  alertConfirm: function() {
    this.setData({
      alertHidden: true
    })
  },
  /**
   * clickEvent
   * 打开自定义模态框
   */
  openSlot: function() {
    this.setData({
      slotHidden: false
    })
  },
  /**
   * 自定义内容模态框点击主操作按钮 
   */
  slotClickConfirm: function() {
    wx.showToast({
      title: '您点击了主操作按钮',
      icon: 'none'
    })
    this.setData({
      slotHidden: true
    })
  },
  /**
   * 自定义内容模态框点击取消按钮
   */
 slotClickCancel: function() {
    wx.showToast({
      title: '您点击了辅操作按钮',
      icon: 'none'
    })
    this.setData({
      slotHidden: true
    })
  },
})