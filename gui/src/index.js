import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { getLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

setTimeout(() => {
  const persistedFocus = getLocalStorage({ k: 'currentFocus' })
  let selector

  if (persistedFocus === 'menuL1') {
    selector = 'nav [aria-current="page"]'
  }

  if (selector) {
    document.querySelectorAll(selector)[0].focus()
  }
}, 0)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
