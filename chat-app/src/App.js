import './App.css';
import Chat from './components/Chat';
import { Router } from '@reach/router';
import Join from './components/Join';
import SignInPage from './components/SignIn';
import Register from './components/Register';
import { Homepage } from './components/Homepage';
import Create from './components/Create';
import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Router>
          <SignInPage path='/' />
          <Register path='/register' />
          <Homepage path='/homepage' />
          <Join path='/join-room' />
          <Create path='/create-room' />
          <Chat path='/chat' />
        </Router>
      </div>
    );
  }
}

export default App;
