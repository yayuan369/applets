var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Api: '"https://test-wechat.meditrusthealth.com/gateway"'
})
