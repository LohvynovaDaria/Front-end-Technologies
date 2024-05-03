import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*import firebase from 'firebase/combat/app';

firebase.initializeApp({
  apiKey: "AIzaSyCnURmcimj3cgdrtYN5TYjzkc7VN4oLkAY",
  authDomain: "simplereactapp-227ba.firebaseapp.com",
  projectId: "simplereactapp-227ba",
  storageBucket: "simplereactapp-227ba.appspot.com",
  messagingSenderId: "406329515487",
  appId: "1:406329515487:web:c29c760c28ab5b296db86a",
  measurementId: "G-K6VP57P7PL"
});*/

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
