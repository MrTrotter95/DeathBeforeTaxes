import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import './styles/Global/FontsAndText.css';
import './styles/Global/PaddingAndMargin.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);