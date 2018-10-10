// pages/loading/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading:false,
    transparent:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showLoading:function(){
    this.setData({
      loading: true
    })
    var self = this
    setTimeout(function () {
      self.setData({
        loading: false
      })
    }, 3000)
  },
  showTransparentPop:function(){
    wx.showToast({
      title: '虽然你看不见，三秒之内你也点不了按钮',
      icon:'none'
    })
    this.setData({
      loading: true,
      transparent: true
    })
    var self=this
    setTimeout(function(){
      self.setData({
        loading: false,
        transparent: false
      })
    },3000)
  }
})