import React from 'react';
import { Portfolio } from '@/utils/data';
import LearnMore from '@/components/atoms/learn-more/Index'

export const Carousel: React.FC = () => {
  const total = Portfolio.length;

  return (
    <div className="relative min-h-[450px] w-full flex items-center justify-center p-3">
      <div className="relative h-96 w-full max-w-96">
        {Portfolio.map((item, index) => {
          
          const prevId = `carousel-${index === 0 ? total : index}`;
          const nextId = `carousel-${index === total - 1 ? 1 : index + 2}`;

          return (
            <div key={item.title}>
              <input
                className="sr-only peer"
                type="radio"
                name="carousel"
                id={`carousel-${index + 1}`}
                defaultChecked={index === 0}
              />

              <div className="absolute left-1/2 top-1/2 z-0 w-full max-w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white opacity-0 shadow-lg transition-all duration-300 peer-checked:z-10 peer-checked:opacity-100">
                <img
                  className="h-64 w-full rounded-t-lg object-cover"
                  src={item.image? item.image : '/github.png'}
                  alt={item.title}
                />
                
                <div className="py-4 px-8">
                  <h3 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="hover:cursor-pointer py-3 text-gray-600 leading-6 text-sm">
                    {item.description}
                  </p>
                  <LearnMore link={item.url}/>
                </div>

                <div className="absolute top-1/2 w-full flex justify-between z-20 px-2 pointer-events-none">
                  <label
                    htmlFor={prevId}
                    className="pointer-events-auto inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>

                  <label
                    htmlFor={nextId}
                    className="pointer-events-auto inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;