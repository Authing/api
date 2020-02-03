
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'unbindEmail',
  type: 'mutation',
  module: '用户管理',
  description: '解绑邮箱',
  query,
  doc
}
