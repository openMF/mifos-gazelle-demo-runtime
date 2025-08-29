import { ProductCard } from '@/components/Cards/product-card';
import { platformDemos, products } from '@/data/productCardData';
// import ScrollVelocity from '@/components/motion/scroll-velocity';
import Particles from '@/components/motion/particle-effect/particles';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 z-0 w-full h-full">
        <Particles
          particleColors={['#60a5fa', '#03fc88']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          className="pointer-events-none w-full h-full"
        />
      </div>

      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full mr-2"></span>
                Demo Platform
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Welcome to the Mifos
                <br />
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
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Explorer
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-light mb-8 mx-auto lg:mx-0">
                Experience interactive demonstrations of our products and
                platform. Explore comprehensive step-by-step guides designed to
                showcase the full potential of our financial technology
                solutions.
              </p>

              <a
                href="#demos"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all text-lg"
                title="Scroll to demos section"
              >
                View Demos
              </a>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end pr-8 md:pr-16">
              <img
                src="/mifos-gazelle-large.svg"
                alt="Mifos Gazelle"
                className="w-[32rem] h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative py-40 px-20">
        <div className="max-w-screenxl mx-auto">
          <ScrollVelocity
            texts={['Mifos Gazelle', 'End To End Demos']}
            velocity={100}
            velocityMapping={{ input: [0, 1000], output: [0, 5] }}
            className="text-7xl font-bold dark:text-blue-400 text-slate-300 tracking-tight"
          />
        </div>
      </section> */}

      <section id="demos" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Explore Product Demos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center mt-14">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Explore Platform Demos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center mt-14">
              {platformDemos.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
