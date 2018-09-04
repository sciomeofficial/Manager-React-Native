import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './LoginForm'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBAqjesjNEIo0N9D4CX_8WhuxUvkLx7ANo",
      authDomain: "nodejs-9eb2e.firebaseapp.com",
      databaseURL: "https://nodejs-9eb2e.firebaseio.com",
      projectId: "nodejs-9eb2e",
      storageBucket: "nodejs-9eb2e.appspot.com",
      messagingSenderId: "672114407838"
    };
    firebase.initializeApp(config)

  }
  render() {
    return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Router />
    </Provider>)
  }
}

export default App;
