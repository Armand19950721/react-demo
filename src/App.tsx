import React, { useEffect, useState, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routers} />
    </Suspense>
  );
};

export default App;
