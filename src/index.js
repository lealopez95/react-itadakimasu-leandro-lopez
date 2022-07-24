import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAXiETGrx4xYnsIUpui10I6zbcu2P0t1Sg",
  authDomain: "react-tp-e-commerce.firebaseapp.com",
  projectId: "react-tp-e-commerce",
  storageBucket: "react-tp-e-commerce.appspot.com",
  messagingSenderId: "907381526078",
  appId: "1:907381526078:web:cbe72d49f62d52f41b0b6f"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

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
