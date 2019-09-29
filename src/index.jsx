import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import history from './constants/history';
import App from './components/app';

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
);
