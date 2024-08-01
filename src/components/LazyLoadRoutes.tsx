import React, { lazy, Suspense } from 'react';

interface LazyLoadRoutesProps {
  componentName: string;
}

const LazyLoadRoutes: React.FC<LazyLoadRoutesProps> = ({ componentName }) => {
  const LazyElement = lazy(() => import(`../pages/${componentName}.tsx`).catch(err => {
    console.error(`Failed to load component: ../pages/${componentName}.tsx`, err);
    throw err;
  }));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyElement />
    </Suspense>
  );
};

export default LazyLoadRoutes;
