import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import './index.css';
import { router } from './router';
import { components } from './components/mdx/mdx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MDXProvider components={components}>
      <RouterProvider router={router} />
    </MDXProvider>
  </React.StrictMode>,
);
