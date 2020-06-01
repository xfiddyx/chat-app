import './App.css';
import Chat from './components/Chat';
import { Router } from '@reach/router';
import Join from './components/Join';
import Homepage from './components/Homepage';
import Create from './components/Create';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Homepage path='/' />
          <Join path='/join-room' />
          <Create path='/create-room' />
          <Chat path='/chat' />
        </Router>
      </div>
    );
  }
}

export default App;
