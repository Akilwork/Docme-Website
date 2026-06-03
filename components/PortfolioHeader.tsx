import React from 'react';

const PortfolioHeader = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Heading */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-serif font-bold text-black leading-tight tracking-tight">
              Portfolio
            </h1>
          </div>
          
          {/* Right Column: Text */}
          <div className="md:pl-10 lg:pl-20">
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
              Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;
