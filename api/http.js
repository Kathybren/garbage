
// 获取网络类型
let NetworkType = ''
wx.getNetworkType({
  success: res => {
    NetworkType = res.networkType
  }
})
wx.onNetworkStatusChange((res) => {
  NetworkType = res.networkType || ''
})


const http = ({
  url = '',
  param = {},
  ...other
} = {}) => {
  return new Promise((resolve, reject) => {
    console.log(url)
    wx.request({
      url: 'https://www.kaikia.top/' + url,
      data: param,
      ...other,
    //   header: {
    //     "client-deviceid": config.Deviceid,
    //     "client-network": NetworkType,
    //     "client-platform-version": config.SystemInfo.system,
    //     "client-platform": config.SystemInfo.model,
    //     "client-version": config.Version,
    //     "client-source": "ttjcyxcx",
    //     "client-method": other.method,
    //     "client-token": wx.getStorageSync('token'),
    //     "content-type": other.contentType || "application/x-www-form-urlencoded"
    //   },
      success: ({data: res}) => {
        if (res.code === 0) {
          resolve(res)
        } else {
        //   wx.showToast({
        //     title: res.msg,
        //     icon: 'none',
        //     mask: true
        //   })
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

// const getUrl = (url) => {
//   if (url.indexOf('://') == -1) {
//     url = config.API_URL + url;
//   }
//   return url
// }

const get = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'get'
  })
}

const post = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'post'
  })
}

module.exports = {
  get,
  post
}