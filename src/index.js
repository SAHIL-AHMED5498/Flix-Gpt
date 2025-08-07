import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './utils/useUserContext';
import { MovieContextProvider } from './utils/useMoviesContext';
import ConfigContextProvider from './utils/useConfigContext';
import { AiContextProvider } from './utils/useAiContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AiContextProvider>
    <ConfigContextProvider>
    <MovieContextProvider>
   <UserContextProvider>
    <App />
    </UserContextProvider>
    </MovieContextProvider>
    </ConfigContextProvider>
    </AiContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
