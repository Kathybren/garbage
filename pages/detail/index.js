//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:1,
    gan:['餐巾纸','笔','创可贴','雨伞','打火机','毛绒玩具','鞋子'],
    shi:['剩饭剩菜','花卉','鸡蛋','麻辣烫','奶粉','饼干','奶油'],
    cre:['洗发水瓶','易拉罐','书本','手机','计算器','一次性杯子','耳机'],
    du:['烟头','卸甲水','X光片','油漆桶','荧光灯管','废药品','废电池']
  },
  onLoad: function (e) {
    this.setData({
      type: e.type
    })
  },
  getUserInfo: function(e) {
    console.log(e.type)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      type: e.type
    })
  }
})
