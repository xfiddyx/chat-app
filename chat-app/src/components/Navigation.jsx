import React, { useState } from 'react';
import { Link, Redirect } from '@reach/router';
import { LogOut } from '../helpers/auth';
import '../styles/Navigation.css';

const Navigation = () => {
  const [SignOut, setSignOut] = useState(null);

  const handleLogOut = (event) => {
    event.preventDefault();

    try {
      LogOut();
    } catch (error) {
      console.log(error);
    }
    setSignOut(true);
  };

  return (
    <nav className='nav'>
      <ul className='navbar'>
        <li>
          <button
            to='/'
            onClick={(event) => {
              return handleLogOut(event);
            }}
          >
            Sign out
          </button>
        </li>
      </ul>
      {SignOut ? <Redirect to='/' noThrow /> : null}
    </nav>
  );
};

export default Navigation;
