const http = require('./http.js')
export const getindexInfo = (params) => http.get('v1/search', params)
export const addHot = (params) => http.get('v1/hot', params)