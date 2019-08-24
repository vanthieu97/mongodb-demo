import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UsernameProvider } from './context'

ReactDOM.render(
    <UsernameProvider>
        <App />
    </UsernameProvider>,
    document.getElementById('root'));