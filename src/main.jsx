// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Route.jsx'
import './index.css'; // Import your global styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);