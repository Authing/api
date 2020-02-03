
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'removeUserFromGroup',
  type: 'mutation',
  module: '用户管理',
  description: '将用户从某角色中移除',
  query,
  doc
}
