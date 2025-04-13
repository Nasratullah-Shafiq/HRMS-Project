// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './i18n/i18n'; // Ensure i18n is initialized here
// import { I18nextProvider } from 'react-i18next'; 
import i18n from './i18n/i18n'; // Import initialized i18n instance
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <BrowserRouter>
        <App />
    // </BrowserRouter>
    
  // </React.StrictMode>
);


// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// import App from './App';
// import './i18n/i18n'; // Initialize i18n
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n/i18n'; // Import i18n instance

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <I18nextProvider i18n={i18n}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </I18nextProvider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

