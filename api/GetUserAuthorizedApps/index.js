
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'GetUserAuthorizedApps',
  type: 'query',
  module: 'OAuth API',
  description: '查询用户授权过的 SSO 应用列表',
  query,
  doc
}
