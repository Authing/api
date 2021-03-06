
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'getWebhookLogDetail',
  type: 'query',
  description: '获取 Webhook 日志详情',
  query,
  doc
}
