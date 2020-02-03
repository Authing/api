
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'SendWebhookTest',
  type: 'mutation',
  module: 'WebHook API',
  description: '发送 Webhook 测试请求',
  query,
  doc
}
