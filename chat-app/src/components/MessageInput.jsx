import React from 'react';
import '../styles/MessageInput.css';

const MessageInput = ({ sendMessages, message, setMessage }) => {
  return (
    <div className='MessageInput'>
      <form className='Message-form'>
        <textarea
          className='textChat'
          type='text'
          placeholder='next message'
          value={message}
          required
          onChange={(event) => {
            return setMessage(event);
          }}
        ></textarea>
        <button
          className='chatSubmit'
          type='submit'
          value='Submit'
          onClick={(event) => {
            return event.target ? sendMessages(event) : null;
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
