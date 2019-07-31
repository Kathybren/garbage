//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    searchVal:'',
    showHistory: []
  },
  onLoad: function () {
    
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

  }
})
