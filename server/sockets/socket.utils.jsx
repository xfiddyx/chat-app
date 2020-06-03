const users = [];

const roomPassGen = () => {
  return `${Math.floor(Math.random() * (999999 - 100000)) + 100000}`;
};

const addUser = ({ id, user_name, roomPass }) => {
  const user = { id, user_name, roomPass };
  users.push(user);
  return { user };
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.roomPass === room);
};

module.exports = { roomPassGen, addUser, getUsersInRoom };
