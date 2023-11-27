import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/globals.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import AuthLayout from '@/components/layouts/AuthLayout.tsx';
import AuthRoutes from '@/pages/auth/AuthRoutes.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout/>,
    children: AuthRoutes
  },
  { path: '*', element: <Navigate to="/auth" replace/> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
