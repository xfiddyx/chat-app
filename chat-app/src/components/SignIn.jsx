import { Link, Redirect } from '@reach/router';
import React, { useState } from 'react';
import { SignIn } from '../helpers/auth';

import '../styles/SignIn.css';

let socket;

const SignInPage = () => {
  const useInput = ({ type }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        placeholder='...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      await SignIn(Email, passWord);
    } catch (error) {
      console.log(error);
    }
    setError(false);
  };
  const [Email, setEmail] = useInput({ type: 'text' });
  const [passWord, setPassword] = useInput({ type: 'text' });
  const [error, setError] = useState(null);
  return (
    <div className='background'>
      <form className='form-cont'>
        <label>Email</label>
        {setEmail}
        <label>Password</label>
        {setPassword}
        <button
          type='submit'
          className='submit'
          disabled={!Email || !passWord}
          onClick={(event) => {
            return HandleSubmit(event);
          }}
        >
          Sign in
        </button>
        <Link to={`/register`}>
          <button type='submit' className='submit'>
            Register
          </button>
        </Link>
      </form>
      {error === false ? <Redirect from='/' to='/homepage' noThrow /> : null}
    </div>
  );
};

export default SignInPage;
