import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Battle } from './components';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Battle />
      </Provider>
    );
  }
}

export default App;
