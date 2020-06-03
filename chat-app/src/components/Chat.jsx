import React, { Component } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
const queryString = require('query-string');

class Chat extends Component {
  state = {
    room: '',
    user: '',
    roomPassword: '',
    users: [],
  };

  componentDidMount() {
    const { room, user } = this.props.location.state;
    const { joinRoom } = queryString.parse(this.props.location.search);
    if (!joinRoom) {
      this.getRoomPassword(user, room);
    } else this.addUserToRoom(user, joinRoom);
  }

  getRoomPassword = (user, room) => {
    let url = 'https://reactproj-chatapp.herokuapp.com/';
    let socket = io(url);

    socket.emit('createRoom', { room, user });
    socket.on('createRoom', (data) => {
      this.setState((currentState) => {
        const { users } = currentState;
        return {
          room,
          password: data.roomPassword,
          users: data.users,
        };
      });
    });
  };

  addUserToRoom = (user, roomPassword) => {
    let url = 'https://reactproj-chatapp.herokuapp.com/';
    let socket = io(url);
    const { roomPass } = this.state;
    socket.emit('joinRoom', { user, roomPassword });
    socket.on('roomData', ({ users }) => {
      this.setState({ users });
    });
  };

  render() {
    const { password, room, users } = this.state;
    console.log(users, password, room);
    return (
      <div>
        <h1>Chat yo</h1>
        <h2>
          {users.map(({ user_name }) => (
            <div key={user_name} className='activeItem'>
              {user_name}
            </div>
          ))}
        </h2>
        <h2>{password ? `the password is ${password}` : null}</h2>
        <h2>{room}</h2>
        {/* <Messages />
        <MessageInput /> */}
      </div>
    );
  }
}

export default Chat;
