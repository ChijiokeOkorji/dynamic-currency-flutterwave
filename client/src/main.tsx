import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';

import './global-styles/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
