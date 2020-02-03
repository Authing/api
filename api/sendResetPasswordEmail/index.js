
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'sendResetPasswordEmail',
  type: 'mutation',
  module: '用户管理',
  description: '发送重置密码邮件',
  query,
  doc
}
