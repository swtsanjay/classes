import React from 'react';
import ReactDOM from 'react-dom/client';
import App1, {data} from './App';

console.log(data);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);