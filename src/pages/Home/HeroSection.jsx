import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Summer Tech Collection 2025
            </h1>
            <p className="text-xl mb-6">
              Explore the latest innovations in smartphones, tablets, and gadgets with our exclusive new arrivals.
            </p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/ipad-pro.jpg"
              alt="Fashion collection"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
