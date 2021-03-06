

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: 'ruleById',
  type: 'query',
  description: '通过 ID 查询 Pipeline 函数',
  query,
  doc
}
