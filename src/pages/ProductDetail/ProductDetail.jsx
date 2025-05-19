import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl" data-id="jyarq2ec" data-line="9-213">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left Column */}
          <div className="md:w-1/2 p-6">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1604782666037-3c63d50052db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MzY5OTh8MHwxfHNlYXJjaHwyfHxwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8fHwxNzQ3NDczMzUyfDA&ixlib=rb-4.1.0&q=85"
                alt="product image"
                className="w-full h-96 object-contain rounded-lg"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[
                "https://images.unsplash.com/photo-1541877944-ac82a091518a",
                "https://images.unsplash.com/photo-1495195129352-aeb325a55b65",
                "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c",
                "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c"
              ].map((src, idx) => (
                <div key={idx} className="border rounded-md p-2 cursor-pointer">
                  <img src={`${src}?q=85`} alt="product thumbnail" className="w-full h-20 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 p-6">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md mb-2">In Stock</span>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Premium Wireless Headphones</h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-gray-500 ml-2">(142 reviews)</span>
              </div>

              <div className="text-3xl font-bold text-gray-800 mb-4">$199.99</div>
              <p className="text-gray-600 mb-6">
                Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation,
                30-hour battery life, and comfortable over-ear design for extended listening sessions.
              </p>

              {/* Color Options */}
              <div className="mb-6">
                <span className="text-gray-700 font-medium">Color:</span>
                <div className="flex space-x-2 mt-2">
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-indigo-600"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-400 border-2 border-transparent"></button>
                  <button className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent"></button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300">
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="border-t border-b border-gray-300 px-4 py-1">1</div>
                  <button className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 flex-1">
                  <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                </button>
                <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 flex-1">
                  <i className="far fa-heart mr-2"></i> Wishlist
                </button>
              </div>
            </div>

            {/* Extra Info */}
            <div className="border-t pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <i className="fas fa-truck text-indigo-600"></i>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Free Shipping</h3>
                  <p className="text-gray-600 text-sm">On orders over $50</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <i className="fas fa-undo text-indigo-600"></i>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Easy Returns</h3>
                  <p className="text-gray-600 text-sm">30-day return policy</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <i className="fas fa-shield-alt text-indigo-600"></i>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">2-Year Warranty</h3>
                  <p className="text-gray-600 text-sm">Coverage for defects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
