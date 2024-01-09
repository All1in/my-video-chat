import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from "./context/SocketContext";
import App from './App';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

