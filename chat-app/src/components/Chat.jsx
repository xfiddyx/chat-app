import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const queryString = require('query-string');

const Chat = ({ location }) => {
  const [chatState, setChatState] = useState(location.state);
  console.log(chatState);
  // const [room, setRoom] = useState('');
  // const [name, setName] = useState('');
  // const [user, setUser] = useState('');
  // const url = 'http://localhost:3000/';

  // useEffect(() => {
  //   let socket = io(url);
  //   const { name, room } = queryString.parse(location.search);
  //   socket.on('join', () => {
  //     setRoom(room);
  //     setName(name);
  //   });
  // });

  return (
    <div>
      <h1>Chat yo</h1>
      {/* <h2>{profileState.user}</h2> */}
      {/* <h2>{room}</h2> */}
    </div>
  );
};

export default Chat;
