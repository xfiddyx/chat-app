import { Link } from '@reach/router';
import React, { Component } from 'react';
import '../styles/Homepage.css';
import io from 'socket.io-client';
let socket;

class Homepage extends Component {
  render() {
    socket = io('https://reactproj-chatapp.herokuapp.com/');

    console.log(socket);

    return (
      <div className='background'>
        <div className='form-container'>
          <Link className='link' to={`/create-room`} onClick={() => {}}>
            <h3>Create Room</h3>
          </Link>
          <Link className='link' to={`/join-room`} onClick={() => {}}>
            <h3>Join Room</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export { Homepage, socket };
