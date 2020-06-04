import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import '../styles/messages.css';
const Messages = ({ messages, user }) => {
  return (
    <ScrollToBottom className='messages'>
      <ul className='chat-container'>
        {messages.map((message, i) => {
          return user === message.user ? (
            <li key={i} className='messageBox chat-left'>
              {message.message}
            </li>
          ) : (
            <li key={i} className='messageBox chat-right'>
              {message.message}
            </li>
          );
        })}
      </ul>
    </ScrollToBottom>
  );
};

export default Messages;
