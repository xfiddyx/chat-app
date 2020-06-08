import React from 'react';
import '../styles/Messages.css';
import Moment from 'react-moment';

const Messages = ({ messages, user }) => {
  return (
    <div className='Messages'>
      <ul className='chat-container'>
        {messages.map((message, i) => {
          return user === message.user ? (
            <>
              <li key={i} className='messageBox chat-left'>
                {message.message}
              </li>
              <Moment format='YYYY/MM/DD' className='chat-user-left'>
                <li className='date chat-user-left'>{message.date}</li>
              </Moment>
              <li className='user chat-user-left'>{message.user}</li>
            </>
          ) : (
            <>
              <li key={i} className='messageBox chat-right'>
                {message.message}
              </li>
              <Moment format='YYYY/MM/DD' className='chat-user-right'>
                <li className='date chat-user-right'>{message.date}</li>
              </Moment>
              <li className='user chat-user-right'>{message.user}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Messages;
