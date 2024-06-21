//create web server
var express = require('express');
//create web server object
var app = express();
//create http server
var http = require('http');
var server = http.createServer(app);
//create socket server
var io = require('socket.io').listen(server);
//create comment array
var comments = [];
//create a server
server.listen(3000);
//output log
console.log('server running at http://