import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

class Root extends Component {

  render() {
    return(
      <Provider store={store}>
        <Router basename='/todoApp'>
          <App/>
        </Router>
      </Provider>
    );
  }

}

export default Root;