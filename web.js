var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var buf = fs.readFileSync('./index.html', 'utf8');
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
