import React, { useState } from 'react';
import { Link } from '@reach/router';

const Create = ({ location }) => {
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

  console.log(room);
  return (
    <div>
      <form>
        <label>Username:</label>
        {setUser}
        <label>Room: </label>
        {setRoom}
        <Link
          to={`/chat?name${user}&room=${room}`}
          onClick={(event) => {
            return !user || !room ? event.preventDefault : null;
          }}
          state={{ room: room, user: user }}
        >
          <button type='submit'>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
