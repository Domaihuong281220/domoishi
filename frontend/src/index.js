import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tagManagerArgs = {
  gtmId: 'GTM-K79HF867',
  auth: 'W1M5jYd6-mA03DuobURe9Q&gtm_preview=env-1'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
