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

  const productIcon = getProductIcon(title);

  return (
    <div className="group relative">
      <div
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-80 border border-gray-200
                    dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-blue-900/30 hover:-translate-y-0.15"
      >
        <div className="bg-blue-50 dark:bg-blue-900/30 px-6 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-200 dark:bg-blue-800 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">
                {productIcon}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
              About
            </h4>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex justify-end">
            <Button
              className="bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm 
                        px-6 py-2.5 rounded-full font-medium transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
              onClick={handleDemoButtonClick}
              title="View Demo"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
