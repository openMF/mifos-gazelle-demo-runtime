import { ProductCard } from '@/components/Cards/product-card';
import { products } from '@/data/productCardData';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-2"></span>
              Product Demo Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Welcome to the Mifos
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent inline-block">
                Product
              </span>{' '}
              <span className="relative inline-block text-blue-600 dark:text-blue-300">
                Demo
                <div className="absolute left-0 right-0 -bottom-2 flex justify-center">
                  <svg
                    height="16"
                    width="70"
                    viewBox="0 0 70 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8 Q 18 16, 35 8 T 68 8"
                      stroke="#60a5fa"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent inline-block">
                Explorer
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-light mb-8 mx-auto md:mx-0">
              Experience interactive demonstrations of our products — MifosX,
              Phee, and VNext. Explore comprehensive step-by-step guides
              designed to showcase the full potential of our financial
              technology solutions.
            </p>
            <a
              href="#demos"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all text-lg"
            >
              View Demos
            </a>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center md:justify-end pr-8 md:pr-16">
            <img
              src="/mifos-gazelle-large.svg"
              alt="Mifos Gazelle"
              className="w-[32rem] h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="pb-24 px-6 pt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore Product Demos
          </h2>
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
      </section>
    </div>
  );
};
