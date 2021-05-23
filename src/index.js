import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MyProvider } from './Store/Context'

import { CartProvider } from "./Jumia/context"  

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
    {/* <MyProvider> */}
    
    <CartProvider>
    <App />
    </CartProvider>
      
       {/* </MyProvider> */}
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
