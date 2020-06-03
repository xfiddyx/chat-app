const { roomPassGen, addUser, getUsersInRoom } = require('./socket.utils.jsx');

const sockets = (io) => {
  io.on('connect', (socket) => {
    const id = socket.id;

    socket.on('createRoom', (event) => {
      const roomPass = roomPassGen(event.room);
      socket.join(roomPass);
      addUser({
        id: socket.id,
        user_name: event.user,
        roomPass: roomPass,
      });
      socket.emit('createRoom', {
        user: event.user,
        room: event.room,
        roomPassword: roomPass,
        users: getUsersInRoom(roomPass),
      });
    });

    socket.on('joinRoom', ({ user, roomPassword, room }) => {
      socket.join(roomPassword);
      addUser({
        id: socket.id,
        user_name: user,
        roomPass: roomPassword,
      });
      socket.emit('roomData', { room, users: getUsersInRoom(roomPassword) });
    });

    socket.on('sendMessage', ({ user, roomPassword, message, room }) => {
      socket.broadcast.to(roomPassword).emit('message', {
        user,
        room,
        message,
        date: new Date(),
      });
    });

    socket.on('disconnect', () => {
      console.log('user has left');
    });
  });
};
module.exports = sockets;
