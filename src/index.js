import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import AppRoot from './containers/AppRoot';
import './sass/styles.scss';
import Reducer from './store/reducers/reducer';

const store = createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
