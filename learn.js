var http = require('http');

http.createServer(function (req, res) {
  res.write('Crossroad');
  res.end();
}).listen(7000);