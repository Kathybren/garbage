//logs.js
import { getindexInfo } from '../../api/index'
Page({
  data: {
    searchVal:'',
    showHistory: true,
    historyval:[],
    list: []
  },
  onLoad: function () {
    
  },
  onShow() {
    let val = wx.getStorageSync("historySearch");
    if (val) {
      this.setData({
        historyval: val
      });
    }
  },
  onUnload() {
    wx.setStorageSync("historySearch", this.data.historyval);
  },
  onHide() {
    wx.setStorageSync("historySearch", this.data.historyval);
  },

  search() {
    let arr = this.data.historyval;
    if (arr.indexOf(this.data.searchVal) === -1) {
      if (arr.length === 30) {
        arr.pop();
      }
      arr.unshift(this.data.searchVal);
      this.setData({
        historyval: arr
      });
    }
    this.searchInfo();
  },
  searchInfo() {
    getindexInfo({name:this.data.searchVal}).then(res => {
      this.setData({list: res.info, showHistory: false})
    })
  },
  todetail(e) {
    let type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: `../detail/index?type=${type}`
    })
  },
  // 删除历史记录
  delete(e) {
    let arr = this.data.historyval;
    arr.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      historyval: arr
    });
  },
  // 搜索历史记录
  searchHistory(e) {
    let name = e.currentTarget.dataset.name;
    this.setData({
      showHistory: false,
      searchVal: name
    });
    this.searchInfo();
  },
  bindKeyInput(e) {
    this.setData({
      searchVal:e.detail.value
    })
    console.log(e.detail.value)
  }
})
