import { ProductCard } from "./components/Cards/product-card";
import { products } from "./data/productCardData";

const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="pt-16 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-2"></span>
            Product Demo Platform
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Welcome to the Mifos
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
              Product Demo Explorer
            </span>
            <div className="flex justify-center mt-0.5">
              <svg height="16" width="180" viewBox="0 0 180 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8 Q 30 16, 60 8 T 120 8 T 178 8" stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round"/>
              </svg>
            </div>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Experience interactive demonstrations of our products — MifosX, Phee, and VNext. 
            Explore comprehensive step-by-step guides designed to showcase the full potential of our financial technology solutions.
          </p>
        </div>
      </div>

      <div className="pb-24 px-6 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default App;