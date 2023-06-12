import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AuthProvider from './context/AuthProvider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

// custom style
const style = {
  fontFamily: 'Playfair Display, serif'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode >
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div style={style} className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
            <Toaster />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </ React.StrictMode>,
)
