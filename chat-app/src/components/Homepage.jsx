import { Link } from '@reach/router';

import React, { Component } from 'react';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to={`/create-room`} onClick={() => {}}>
          <h3>Create Room</h3>
        </Link>

        <Link to={`/join-room`} onClick={() => {}}>
          <h3>Join Room</h3>
        </Link>
      </div>
    );
  }
}

export default Homepage;
