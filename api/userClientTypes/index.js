
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'userClientTypes',
  type: 'query',
  module: '用户池管理',
  description: '获取用户池类型',
  query,
  doc
}
