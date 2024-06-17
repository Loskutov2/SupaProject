import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import notifications from "./testSource.json"

export const MyContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/notifications'>
      <MyContext.Provider value={notifications}>
        <App />      
      </MyContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
