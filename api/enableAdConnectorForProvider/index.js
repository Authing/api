

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'enableAdConnectorForProvider',
  type: 'mutation',
  description: '为 OAuth/OIDC Provider 开启 AD 登录',
  query,
  doc
}
