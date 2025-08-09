import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../Cart/CartContext.jsx';

const renderStars = (rating) => {
  const safeRating = Number.isFinite(rating) ? rating : 0;
  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i className="fas fa-star text-yellow-400" key={`full-${i}`} />
      ))}
      {halfStar && <i className="fas fa-star-half-alt text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <i className="far fa-star text-yellow-400" key={`empty-${i}`} />
      ))}
    </>
  );
};

const FeaturedProducts = ({ filters }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!filters) {
      axios.get(`${API_URL}/api/products/`)
        .then(res => setProducts(Array.isArray(res.data.data) ? res.data.data : []))
        .catch(err => console.error('Error fetching products:', err));
    } else {
      axios.post(`${API_URL}/api/products/filter`, filters)
        .then(res => setProducts(Array.isArray(res.data.data) ? res.data.data : []))
        .catch(err => console.error('Error filtering products:', err));
    }
  }, [filters]);

  return (
    <div className="w-full md:w-3/4 mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-bold text-dark mb-4 md:mb-0">
          Featured Products
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select className="border rounded-md px-3 py-1">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={`${API_URL}${product.image}`}
                alt={product.name}
                className="w-full h-64 object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <div className="flex items-center mb-2">
                {renderStars(Number(product.rate))}
                <span className="text-gray-600 text-sm ml-2">
                  ({product.review})
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-600 font-bold">
                  ₫{parseFloat(product.price_new).toLocaleString()}
                </span>
                {product.price_old && (
                  <span className="text-gray-400 text-sm line-through">
                    ₫{parseFloat(product.price_old).toLocaleString()}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  console.log('Added to cart:', product);
                  addToCart(product);
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <i className="fas fa-shopping-cart mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
