import React, { Component } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
// const queryString = require('query-string');

class Chat extends Component {
  state = {
    room: '',
    user: '',
    password: '',
    users: [],
  };

  componentDidMount() {
    const { room, user } = this.props.location.state;
    this.getRoomPassword(user, room);
  }

  getRoomPassword = (user, room) => {
    let url = 'https://git.heroku.com/reactproj-chatapp.git';
    let socket = io(url);

    socket.emit('createRoom', { room, user });
    socket.on('createRoom', (data) => {
      this.setState((currentState) => {
        const { users } = currentState;
        return {
          room,
          password: data.roomPassword,
          users: [...users, data.user],
        };
      });
    });
  };

  // socket.on('roomData', ({ user, room }) => {
  //   console.log(user, room);
  // });
  render() {
    const { user, password, room, users } = this.state;
    console.log(users, password, room);
    return (
      <div>
        <h1>Chat yo</h1>
        <h2>{`the room leader is ${user}`}</h2>
        <h2>*second person joining room*</h2>
        <h2>{`the password is ${password}`}</h2>
        <h2>{room}</h2>
        {/* <Messages />
        <MessageInput /> */}
      </div>
    );
  }
}

export default Chat;
