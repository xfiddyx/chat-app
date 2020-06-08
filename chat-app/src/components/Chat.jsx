import React, { Component } from 'react';
import { socket } from './Homepage';
import '../styles/Chat.css';
import Messages from './Messages';
import MessageInput from './MessageInput';
const queryString = require('query-string');

class Chat extends Component {
  state = {
    room: '',
    user: '',
    roomPassword: '',
    users: [],
    messages: [],
    message: '',
  };

  componentDidMount() {
    const { room, user } = this.props.location.state;
    const { joinRoom } = queryString.parse(this.props.location.search);
    socket.on('message', this.updateMessages);
    if (!joinRoom) {
      this.getRoomPassword(user, room);
    } else this.addUserToRoom(user, joinRoom);
  }

  getRoomPassword = (user, room) => {
    socket.emit('createRoom', { room, user });
    socket.on('createRoom', (data) => {
      this.setState((currentState) => {
        const { users } = currentState;
        return {
          room,
          user: data.user,
          password: data.roomPassword,
          users: data.users,
        };
      });
    });
  };

  addUserToRoom = (user, roomPassword) => {
    socket.emit('joinRoom', { user, roomPassword });
    socket.on('roomData', ({ users }) => {
      this.setState({ users, user, roomPassword });
    });
  };
  setMessage = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ message: value });
  };

  updateMessages = (data) => {
    this.setState((currentState) => {
      const { messages } = currentState;
      return { messages: [...messages, data] };
    });
  };

  sendMessage = (event) => {
    event.preventDefault();
    const { message, room, user } = this.state;
    if (message) {
      socket.emit('sendMessage', { message, room, user });
      this.setState({ message: '' });
    }
  };

  render() {
    const { password, room, users, message, messages, user } = this.state;
    return (
      <div className='background'>
        <header>
          <h1 className='title'>Chat yo</h1>
          <h2 className='Chatpage'>
            {users.map(({ user_name, id }) => (
              <div key={id} className='activeItem'>
                {user_name}
              </div>
            ))}
          </h2>
          <h2 className='Chatpage'>
            {password ? `the password is ${password}` : null}
          </h2>
          <h2 className='Chatpage'>{room}</h2>
        </header>
        <Messages className='Messages' messages={messages} user={user} />
        <MessageInput
          className='MessageInput'
          setMessage={this.setMessage}
          sendMessages={this.sendMessage}
          message={message}
        />
      </div>
    );
  }
}

export default Chat;
