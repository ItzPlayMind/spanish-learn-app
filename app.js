const fs = require("fs");
const port = process.env.PORT || 3000;

var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket)=>{
    console.log("A user joined!");
});

http.listen(port, function(){
  console.log('listening on *: ',port);
});