import React, { Component } from 'react';
import { Link } from '@reach/router';

export class Join extends Component {
  state = {
    room: '',
    name: '',
    users: [],
  };
  render() {
    const { name, room } = this.state;
    return (
      <div>
        <h1>The join page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            placeholder='name'
            type='text'
            onChange={this.nameChange}
          ></input>
          <label>Room</label>
          <input
            placeholder='room'
            type='text'
            onChange={this.roomChange}
          ></input>
          <Link
            onClick={(event) => {
              return !name || !room ? event.preventDefault : null;
            }}
            to={`/chat?name${name}&room=${room}`}
          >
            <input value='Submit' type='submit'></input>
          </Link>
        </form>
      </div>
    );
  }

  nameChange = (event) => {
    event.preventDefault();
    const name = event.target.value;
    this.setState({ name });
  };
  roomChange = (event) => {
    event.preventDefault();
    const room = event.target.value;
    this.setState({ room });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((currentState) => {
      const { name } = currentState;
      return { users: [...currentState.users, name] };
    });
  };
}

export default Join;
