import React from 'react';
import ReactDOM from 'react-dom/client';

// providers
import { RouteProvider } from '@components/providers/RouteProvider';
import { DataAccessProvider } from '@components/providers/DataAccessProvider';
import { PopoversProvider } from '@components/providers/PopoversProvider';

// components
import { Dashboard } from '@components/pages/Dashboard';

// theme
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouteProvider>
      <DataAccessProvider>
        <PopoversProvider>
          <Dashboard />
        </PopoversProvider>
      </DataAccessProvider>
    </RouteProvider>
  </React.StrictMode>,
);
