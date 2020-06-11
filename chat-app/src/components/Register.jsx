import { Link, Redirect } from '@reach/router';
import React, { useState } from 'react';
import { SignUp } from '../helpers/auth';
import '../styles/Register.css';

const Register = () => {
  const useInput = ({ type, placeholder }) => {
    const [value, setValue] = useState('');
    const input = (
      <input
        className='input__register'
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  };
  const [name, setName] = useInput({ type: 'text', placeholder: 'name' });
  const [Email, setEmail] = useInput({ type: 'text', placeholder: 'email' });
  const [Password, setPassword] = useInput({
    type: 'password',
    placeholder: 'password',
  });
  const [ConfirmPassword, setConfirmPassword] = useInput({
    type: 'password',
    placeholder: 'confirm password',
  });
  const [Error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await SignUp(Email, Password, name);
    } catch (error) {
      console.log(error);
    }
    // setEmail('');
    // setPassword('');
    // setName('');
    setError('no error');
  };

  return (
    <div className='background'>
      <form className='form-cont'>
        <label className='label__register'>Username</label>
        {setName}
        <label className='label__register'>Email</label>
        {setEmail}
        <label className='label__register'>Password</label>
        {setPassword}
        <label className='label__register'>Confirm Password</label>
        {setConfirmPassword}
        <button
          type='submit'
          className='submit'
          disabled={
            !name ||
            !Password ||
            !Email ||
            !ConfirmPassword ||
            Password !== ConfirmPassword
          }
          onClick={(event) => {
            return handleSubmit(event);
          }}
        >
          Register
        </button>
      </form>
      {Error === 'no error' ? (
        <Redirect from='register' to='/homepage' noThrow />
      ) : null}
    </div>
  );
};

export default Register;
