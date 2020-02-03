
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'RevokeUserAuthorizedApp',
  type: 'mutation',
  module: 'OAuth API',
  description: '撤回用户对 SSO 应用的授权',
  query,
  doc
}
