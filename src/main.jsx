import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create the root element for React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Render the App component inside the root element */}
    <App />
  </React.StrictMode>,
);
