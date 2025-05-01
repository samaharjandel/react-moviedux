import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { OptimizelyProvider, createInstance } from '@optimizely/react-sdk';

const optimizely = createInstance({
  sdkKey: 'Svk5HRdcFqazn5VEvfj8k'  // Replace with your actual SDK key from Optimizely
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OptimizelyProvider optimizely={optimizely} user={{id: 'user123'}}>
      <App />
    </OptimizelyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
