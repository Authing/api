
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'queryInvitation',
  type: 'query',
  module: '注册白名单',
  description: '查看白名单中的手机号',
  query,
  doc
}
