import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './fibonacci';
import Access from './Signup';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
  <Routes>
    <Route index element={<Access/>} />
    <Route path="/fibo" element={<App/>} />
  </Routes>
  </BrowserRouter>
  </div>
);


reportWebVitals();
