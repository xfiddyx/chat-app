import React from 'react';

const MessageInput = ({ sendMessages, message, setMessage }) => {
  return (
    <div>
      <form
        onClick={(event) => {
          return sendMessages(event);
        }}
      >
        <textarea
          type='text'
          placeholder='next message'
          value={message}
          required
          onChange={(event) => {
            return setMessage(event);
          }}
        ></textarea>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
};

export default MessageInput;
