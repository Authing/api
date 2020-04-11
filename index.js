const fs = require("fs")

module.exports.handler = (request, response, context) => {
  response.setStatusCode(200)
  response.setHeader('content-type', 'application/json')
  let data = fs.readFileSync('./output.json', 'utf8')
  data = JSON.parse(data)
  response.send(JSON.stringify(data))
}
