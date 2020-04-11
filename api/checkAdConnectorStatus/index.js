

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'checkAdConnectorStatus',
  type: 'query',
  description: '检测 AD 连接状态',
  query,
  doc
}
