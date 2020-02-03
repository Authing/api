
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'changePassword',
  type: 'mutation',
  module: '用户管理',
  description: '修改密码',
  query,
  doc
}
