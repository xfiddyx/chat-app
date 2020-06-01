const { roomPassGen } = require('./socket.utils');

const sockets = (io) => {
  const users = [];
  io.on('connect', (socket) => {
    const id = socket.id;

    socket.on('createRoom', (event) => {
      const roomPass = roomPassGen(event.room);
    });

    socket.on('join', ({ name, room }) => {
      socket.join(room);
      socket.emit('roomData', { room: room, name: user });

      socket.broadcast.to(room).emit('joinMsg', { hello: 'idiot' });

      socket.on('sendMsg', (event) => {
        io.to(room).emit('sendMsg', {
          username: event.user,
          msg: event.msg,
          date: new Date(),
        });
      });
    });
    socket.on('disconnect', () => {
      console.log('user has left');
    });
  });
};

module.exports = sockets;

// socket.emit('sendMsg', {
//   msg: 'got the message',
//   user: event.user,
//   date: format(new Date(), 'dd/MM/yyyy HH:mm:ss'),
// });
