import { ProductCard } from "./components/Cards/product-card";
import { products } from "./data/productCardData";

const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="pt-16 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            Product Demo Platform
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Welcome to the Mifos
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Product Demo Explorer
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
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