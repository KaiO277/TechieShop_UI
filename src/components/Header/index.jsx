import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-2xl font-bold text-indigo-600 flex items-center">
              <i className="fas fa-shopping-bag mr-2"></i>
              TechieShop
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="/products/list" className="text-gray-700 hover:text-indigo-600">Shop</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-indigo-600">
              <i className="fas fa-search"></i>
            </button>
            <button className="p-2 text-gray-700 hover:text-indigo-600">
              <i className="fas fa-user"></i>
            </button>
            <a href="/cart" className="p-2 text-gray-700 hover:text-indigo-600 relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </a>
            <button className="md:hidden p-2 text-gray-700">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
