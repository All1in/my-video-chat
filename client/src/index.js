import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from "./context/SocketContext";
import App from './App';

import './styles/index.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root'),
);
