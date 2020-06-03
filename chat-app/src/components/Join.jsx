import React, { Component } from 'react';
import { Link } from '@reach/router';

export class Join extends Component {
  state = {
    room: '',
    user: '',
  };
  render() {
    const { user, room } = this.state;
    return (
      <div>
        <h1>The join page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            placeholder='name'
            type='text'
            onChange={this.userChange}
            required
          ></input>
          <label>Room Password</label>
          <input
            placeholder='room password'
            type='text'
            onChange={this.roomChange}
            required
          ></input>
          <Link
            onClick={(event) => {
              return !user || !room ? event.preventDefault : null;
            }}
            to={`/chat?name=${user}&joinRoom=${room}`}
            state={{ room: room, user: user }}
          >
            <input value='Submit' type='submit'></input>
          </Link>
        </form>
      </div>
    );
  }
  userChange = (event) => {
    event.preventDefault();
    const user = event.target.value;
    this.setState({ user });
  };
  roomChange = (event) => {
    event.preventDefault();
    const room = event.target.value;
    this.setState({ room });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((currentState) => {
      const { name, room } = currentState;
      return { name, room };
    });
  };
}

export default Join;
