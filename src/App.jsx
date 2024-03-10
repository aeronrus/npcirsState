import React, { Suspense, useState, useEffect } from 'react';
import './scss/app.scss';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

const Card = React.lazy(() => import('./components/Card/Card'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/card/:id"
            element={
              <Suspense fallback={<div>Загружаем информацию....</div>}>
                <Card />
              </Suspense>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
