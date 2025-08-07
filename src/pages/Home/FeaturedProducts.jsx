import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star text-yellow-400"></i>
      ))}
      {half && <i className="fas fa-star-half-alt text-yellow-400"></i>}
      {[...Array(5 - fullStars - (half ? 1 : 0))].map((_, i) => (
        <i key={i + 5} className="far fa-star text-yellow-400"></i>
      ))}
    </>
  );
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/categories/top_expensive_products/`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch featured products", err);
      });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={`${API_URL}${product.image}`}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                {parseFloat(product.price_old) > parseFloat(product.price_new) && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">{renderStars(parseFloat(product.rate))}</div>
                  <span className="text-gray-600 text-sm ml-2">
                    ({product.review})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">
                    ₫{parseInt(product.price_new).toLocaleString()}
                  </span>
                  {product.price_old && (
                    <span className="text-gray-500 text-sm line-through">
                      ₫{parseInt(product.price_old).toLocaleString()}
                    </span>
                  )}
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/products/list"
            className="bg-white border-2 border-indigo-600 text-indigo-600 font-bold py-2 px-6 rounded-lg hover:bg-indigo-50 transition duration-300 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
