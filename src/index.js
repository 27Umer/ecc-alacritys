const commonApi = require('./api_common')
const objectApi = require('./api_object')
const bip39 = require('bip39')

const ecc = Object.assign({}, commonApi, objectApi)

module.exports = ecc