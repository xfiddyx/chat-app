import './App.css';
import Chat from './components/Chat';
import { auth } from './services/firebase';
import { Router } from '@reach/router';
import Join from './components/Join';
import SignInPage from './components/SignIn';
import Register from './components/Register';
import { Homepage } from './components/Homepage';
import Create from './components/Create';
import React, { Component } from 'react';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  state = {
    authenticated: null,
  };

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div className='App'>
        {authenticated === true ? <Navigation /> : null}
        <Router>
          <PublicRoute
            authenticated={authenticated}
            component={SignInPage}
            path='/'
          />
          <PublicRoute
            authenticated={authenticated}
            component={Register}
            path='/register'
          />
          <PrivateRoute
            authenticated={authenticated}
            component={Homepage}
            path='/homepage'
          />
          <PrivateRoute
            authenticated={authenticated}
            component={Join}
            path='/join-room'
          />
          <PrivateRoute
            authenticated={authenticated}
            component={Create}
            path='/create-room'
          />
          <PrivateRoute
            authenticated={authenticated}
            component={Chat}
            path='/chat'
          />
        </Router>
      </div>
    );
  }
}

export default App;
