var express = require('express');
var app = express();

var http = require("http").createServer(app);

var io = require("socket.io")(http);

io.on('connection', function(client){
  console.log("client connected");
});

http.listen(8080);
