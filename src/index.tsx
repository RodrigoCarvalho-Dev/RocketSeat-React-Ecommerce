import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { createServer } from 'miragejs';

createServer({
    routes() {
        this.namespace = 'api';
        this.get('/transactions' , () => {
          return [
            {
            id: 1,
            title : 'Video Game',
            amount : 3500,
            category : 'games',
            create_at : '2021-02-12'
            }
          ]
        });
    }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

