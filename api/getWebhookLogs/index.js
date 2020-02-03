
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'getWebhookLogs',
  type: 'query',
  module: 'WebHook API',
  description: '获取 Webhook 日志列表',
  query,
  doc
}
