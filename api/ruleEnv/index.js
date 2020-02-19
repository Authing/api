

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'ruleEnv',
  type: 'query',
  description: '查询用户池 Rule 环境变量',
  query,
  doc
}
