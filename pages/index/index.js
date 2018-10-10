//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: ['loading']
      },
      {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['modal']
      }
    ]
  },
  
  onLoad: function () {
    
  },
  kindToggle:function(e){
    var id=e&&e.currentTarget&&e.currentTarget.id;
    var list=this.data.list;
    for(var item of list){
      if(item.id==id){
        item.open = !item.open;
      }else{
        item.open=false
      }
    }
    this.setData({
      list:list
    })
  }
})
