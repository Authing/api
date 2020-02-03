
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'removeFromInvitation',
  type: 'mutation',
  module: '注册白名单',
  description: '从白名单中删除手机号',
  query,
  doc
}
