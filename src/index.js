import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// Higher Order Component AKA HOC
// higher order funcitons take functions as argument
// Just like HOC they take components as arguments
// import { useState, useEffect } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();