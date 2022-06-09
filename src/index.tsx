import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css'
import reportWebVitals from './reportWebVitals';
import AppRutas from './AppRutas';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <AppRutas />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();