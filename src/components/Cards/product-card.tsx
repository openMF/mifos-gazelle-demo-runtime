import React from 'react';
import { Button } from '../ui/button';

interface ProductCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  isHighlighted?: boolean;
  onDemoClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title = "MifosX",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  onDemoClick = () => console.log('Demo clicked')
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-80 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.15">
      <div className="bg-blue-50 px-6 py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
            <span className="text-blue-700 font-semibold text-sm">A</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      
      <div className="bg-blue-50 px-6 pb-8">
        <div className="flex justify-center items-center space-x-4">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[24px] border-l-transparent border-r-transparent border-b-gray-400"></div>
          
          <div className="relative">
            <div className="w-8 h-8 bg-gray-400 rounded-sm relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400"></div>
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400"></div>
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-50 rounded-full"></div>
            </div>
          </div>
          
          <div className="w-8 h-10 bg-gray-400 rounded-sm"></div>
        </div>
      </div>
      
      <div className="px-6 py-6 bg-white">
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-900 mb-1">About</h4>
        </div>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex justify-end">
          <Button 
            onClick={onDemoClick}
            className="bg-blue-400 hover:bg-blue-500 text-white text-sm px-6 py-2.5 rounded-full font-medium transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

