
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'verifyResetPasswordVerifyCode',
  type: 'mutation',
  description: '验证重置密码验证码',
  query,
  doc
}
