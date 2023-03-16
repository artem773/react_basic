import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // во что ми помещаем рендер со страніци 
root.render( //что ми рендерим на страніце 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
