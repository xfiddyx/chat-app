const roomPassGen = (room) => {
  return `${room}#${Math.floor(Math.random() * (999999 - 100000)) + 100000}`;
};

module.exports = { roomPassGen };
