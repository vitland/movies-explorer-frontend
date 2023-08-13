import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import './index.css';
import { SidebarProvider } from './utils/contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App/>
    </ SidebarProvider>
  </React.StrictMode>,
);
