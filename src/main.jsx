// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from "react-router-dom";

// useEffect(() => {
//   AOS.init({
//     duration: 1000,
//     once: true, // whether animation should happen only once - while scrolling down
//   });
//   AOS.refresh();
//   // Cleanup function to avoid memory leaks
//   return () => {
//     AOS.refresh();
//   }
// }, []);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);