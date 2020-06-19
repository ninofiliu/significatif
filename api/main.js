const http = require('http')

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.end('Api\n')
  })
  .listen(8081, () => console.log('Server listening at http://localhost:8081'))
