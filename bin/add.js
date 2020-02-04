const fs = require("fs")
const path = require("path")


const args = process.argv.slice(2);
const name = args[0]

const destFolder = path.join(__dirname, `../api/${name}`)
if (fs.existsSync(destFolder)) {
  throw Error(`${destFolder} allready exist!`)
}
fs.mkdirSync(destFolder)

const indexFile = path.join(destFolder, 'index.js')
const docFile = path.join(destFolder, 'README.md')
const gqlFile = path.join(destFolder, 'query.gql')
fs.writeFileSync(docFile, "")
fs.writeFileSync(gqlFile, "")
fs.writeFileSync(indexFile, `

const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: '${name}',
  type: '',
  description: '',
  query,
  doc
}
`)