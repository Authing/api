
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'queryMFA',
  type: 'query',
  module: 'MFA 多因素认证',
  description: '查询 MFA 配置',
  query,
  doc
}
