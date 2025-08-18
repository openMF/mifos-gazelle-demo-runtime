import { useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const PlatformDemos = lazy(() => import('./platform-demos'));
const ProductDemos = lazy(() => import('./product-demos'));

export const DemoList = () => {
  const { product } = useParams();

  return (
    <Suspense fallback={<div className="p-6 text-center">Loading demo...</div>}>
      {product === 'platform_demos' ? (
        <PlatformDemos />
      ) : (
        <ProductDemos product={product as 'mifosx' | 'phee' | 'vnext'} />
      )}
    </Suspense>
  );
};
