const {
  roomPassGen,
  addUser,
  getUsersInRoom,
  getUser,
} = require('./socket.utils.jsx');

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

    socket.on('sendMessage', ({ message }) => {
      const user = getUser(socket.id);
      console.log(user);
      io.to(user.roomPass).emit('message', {
        user: user.user_name,
        room: user.room,
        message,
        date: new Date(),
      });
    });

    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
      if (user) {
        io.to(user.room).emit('message', {
          user: user.user,
          text: `${user.name} has left.`,
        });
        io.to(user.room).emit('roomData', {
          room: user.room,
          users: getUsersInRoom(user.room),
        });
      }
    });
  });
};
module.exports = sockets;
