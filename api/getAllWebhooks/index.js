
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'getAllWebhooks',
  type: 'query',
  description: '获取用户池 WebHook 列表',
  module: 'WebHook API',
  query,
  doc
}
