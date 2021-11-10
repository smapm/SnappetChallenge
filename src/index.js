import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoot from './containers/AppRoot';
import './sass/styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <AppRoot />
  </BrowserRouter>,
  document.getElementById('root')
);
