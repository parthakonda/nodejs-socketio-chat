var http = require('http');
var io = require('./socket')(http);
var app = require('./app')(io);

var server = http.Server(app);

server.listen(3000, function() {
  console.log('listening on *:3000');
});

io = io.listen(server);
