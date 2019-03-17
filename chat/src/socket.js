module.exports = http => {
  var io = require('socket.io')(http);

  io.on('connection', socket => {
    console.log(`OK: User '${socket.handshake.query.email}' is connected`);
    socket.join(socket.handshake.query.email);
  });

  return io;
};
