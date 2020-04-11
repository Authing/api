

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'providerListByADConnector',
  type: 'query',
  description: '查询开启了 AD 连接的 OAuth/OIDC Provider',
  query,
  doc
}
