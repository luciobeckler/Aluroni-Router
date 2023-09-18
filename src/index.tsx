import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import AppRouter from 'routes';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
