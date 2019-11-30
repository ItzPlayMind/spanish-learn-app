const fs = require("fs");
const port = process.env.PORT || 3443;

var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http);

app.get('/', function(req, res){
    res.sendFile("index.html");
});

io.on("connection", (socket)=>{
    console.log("A user joined!");
});

http.listen(port, function(){
  console.log('listening on *: ',port);
});