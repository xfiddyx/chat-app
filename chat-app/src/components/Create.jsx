import React, { useState, useEffect } from 'react';
import '../styles/Create.css';
import { Link } from '@reach/router';
import io from 'socket.io-client';
let socket;
const Create = ({ location }) => {
  socket = io('https://reactproj-chatapp.herokuapp.com/');
  const useInput = ({ type }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };

  const [room, setRoom] = useInput({ type: 'text' });
  const [user, setUser] = useInput({ type: 'text' });
  // socket = io('https://reactproj-chatapp.herokuapp.com/');
  return (
    <div className='background'>
      <form className='form-container'>
        <label>Username:</label>
        {setUser}
        <label>Room: </label>
        {setRoom}
        <Link
          to={`/chat?name=${user}&room=${room}`}
          onClick={(event) => {
            return !user || !room ? event.preventDefault : null;
          }}
          state={{
            room: room,
            user: user,
          }}
        >
          <button type='submit' className='submit'>
            Create Room
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
// module.export = { socket };
