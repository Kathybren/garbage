const http = require('./http.js')
export const getindexInfo = (params) => http.get('v1/search', params)