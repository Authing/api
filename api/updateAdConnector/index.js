

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'updateAdConnector',
  type: 'mutation',
  description: '修改 AD 连接',
  query,
  doc
}
