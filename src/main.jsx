import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create the root element for React
// The root element is where the React application will be mounted
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Render the App component inside the root element */}
    {/* React.StrictMode is a wrapper that helps detect potential problems in the application */}
    <App />
  </React.StrictMode>,
);
