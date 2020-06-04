const users = [];
const roomPassGen = () => {
  return `${Math.floor(Math.random() * (999999 - 100000)) + 100000}`;
};

const addUser = ({ id, user_name, roomPass }) => {
  const user = { id, user_name, roomPass };
  users.push(user);
  console.log(users);

  return { user };
};

const getUser = (id) =>
  users.find((user) => {
    console.log(id);
    return user.id === id;
  });

const getUsersInRoom = (room) => {
  return users.filter((user) => user.roomPass === room);
};

const removeUser = (id) => {
  const userToRemove = users.findIndex((user) => {
    return user.id === id;
  });

  if (userToRemove !== -1) return users.splice(userToRemove, 1)[0];
};

module.exports = { roomPassGen, addUser, getUsersInRoom, getUser, removeUser };
