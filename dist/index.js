
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dswap-v2-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dswap-v2-sdk.cjs.development.js')
}
