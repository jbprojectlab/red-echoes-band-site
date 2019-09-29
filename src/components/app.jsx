import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';
import Header from '../components/header';
import Navbar from './navbar';
import Routes from '../components/routes';

const App = () => (
  <Fragment>
    <Header />
    <Navbar />
    <Routes />
  </Fragment>
);

export default App;
