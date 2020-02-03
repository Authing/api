
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'isClientBelongToUser',
  type: 'query',
  module: '用户池管理',
  description: '是否具备用户池相关权限',
  query,
  doc
}
