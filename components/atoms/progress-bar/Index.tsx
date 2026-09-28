import React from 'react';

interface Information {
  percentage: string;
  color?: string;  
}

export const Index = ({percentage, color = 'bg-button'}: Information) => {
  return (
    <div className="w-full font-sans">
      <div className="relative w-full py-2">
        <div
          className="absolute top-0 -translate-x-1/2 transition-all duration-500 ease-out"
          style={{ left: percentage }}>
        </div>
        <div className="relative w-full h-1 bg-gray-200 rounded-full overflow-visible">
          <div
            className={`h-full ${color} rounded-l-full rounded-r-none flex items-center justify-end pr-4 transition-all duration-500 ease-out relative`}
            style={{ width: percentage }} >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;