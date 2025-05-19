import React from 'react';

// HeroSection.jsx

const HeroSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Products</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover amazing deals on high-quality products for your everyday needs.
        </p>
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary text-white p-2 rounded-full">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
