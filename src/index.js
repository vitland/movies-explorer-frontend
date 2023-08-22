import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

import './index.css';
import { SidebarProvider } from './contexts/SidebarContext';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SidebarProvider>
        <App/>
      </ SidebarProvider>
    </AuthProvider>
  </React.StrictMode>,
);
