const apis = require('../api')

const args = process.argv.slice(2);
const name = args[0]
const api = apis[name]

if (!api) {
  console.log(`API ${name} not found.
Please check your input!
`)
  return
}

const { name: apiName, type, query, doc } = api
const log = `
Authing API Doc 🚀

Name: ${name}
Type: ${type}
Query: ${query}
doc: ${doc}
`
console.log(log)