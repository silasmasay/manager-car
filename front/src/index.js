import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { App } from './App';
import { ErrorPage } from './views/ErrorPage';
import { Dashboard } from './views/Dashboard';
import { Tasks } from './views/Tasks';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/" 
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route 
        path="/"
        element={<Dashboard />}
      >
      <Route 
        element={<Dashboard />}
        path="?id=:carID/edit"
      />
      <Route 
        element={<Dashboard />}
        path="?id=:carID/delete"
      />
      </Route>
      <Route 
        path="tasks" 
        element={<Tasks />} 
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
