
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./zs-sdk-elastic.cjs.production.min.js')
} else {
  module.exports = require('./zs-sdk-elastic.cjs.development.js')
}
