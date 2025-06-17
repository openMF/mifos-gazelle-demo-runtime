import React from 'react';
import { ProductCard } from './components/Cards/product-card';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Welcome to the Mifos Product<br />Demo Explorer
          </h1>
          <p className="text-gray-600 font-semibold max-w-2xl mx-auto mb-4">
            Experience interactive demos of MifosX, Phee, and VNext — with step-by-step guides. (Text is yet to be decided)
          </p>
        </div>
        
        <div className="flex md:flex-row xl:flex-row 2xl:flex-row flex-col justify-center items-center space-x-6">
          <ProductCard title="MifosX" />
          <ProductCard title="PHEE" />
          <ProductCard title="VNext" />
        </div>
      </div>
    </div>
  );
};

export default App;