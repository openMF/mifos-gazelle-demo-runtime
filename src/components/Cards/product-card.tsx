import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  isHighlighted?: boolean;
  onDemoClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title = 'MifosX',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
}) => {
  const navigate = useNavigate();

  const handleDemoButtonClick = () => {
    navigate(`/demo-list/${title.toLowerCase()}`);
  };

  const getProductIcon = (productTitle: string) => {
    const firstLetter = productTitle.charAt(0).toUpperCase();
    return firstLetter;
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

      <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-80 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 hover:-translate-y-1 hover:border-blue-200/40 dark:hover:border-blue-600/30">
        <div className="relative bg-gradient-to-br from-blue-50/80 via-blue-50/60 to-indigo-50/40 dark:from-blue-900/20 dark:via-blue-900/15 dark:to-indigo-900/10 px-6 py-5 border-b border-gray-100/80 dark:border-gray-700/50">
          <div className="flex items-center">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-200/80 to-blue-300/60 dark:from-blue-700/60 dark:to-blue-600/40 rounded-xl flex items-center justify-center mr-4 shadow-sm">
              <span className="text-blue-700 dark:text-blue-200 font-bold text-base">
                {getProductIcon(title)}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Overview
            </h4>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent rounded-full"></div>
          </div>

          <p
            className="text-md text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3"
            title={description}
          >
            {description}
          </p>

          <div className="pt-2">
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white text-sm px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleDemoButtonClick}
              title={`View ${title} Demo`}
            >
              <span className="flex items-center justify-center gap-2">
                Explore Demo
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
