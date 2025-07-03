import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

const demoComponentMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  mifosx: lazy(() => import('./mifosx')),
  phee: lazy(() => import('./phee')),
  vnext: lazy(() => import('./vnext')),
};

export const DemoList = () => {
  const { product } = useParams();

  const Component = product ? demoComponentMap[product] : null;

  return (
    <Suspense fallback={<div className="p-6 text-center">Loading demo...</div>}>
      {Component ? (
        <Component />
      ) : (
        <div className="p-6 text-center text-red-500">
          Invalid demo: {product}
        </div>
      )}
    </Suspense>
  );
};
