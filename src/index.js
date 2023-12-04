import React from 'react';
import ReactDOM from 'react-dom/client';
import Snowfall from 'react-snowfall';
import App from './App';
import './index.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {' '}
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
      <App />
    </Provider>
  </BrowserRouter>,
);
