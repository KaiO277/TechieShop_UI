// FeaturedProducts.jsx
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300",
    rating: 4.5,
    reviews: 42,
    price: 129.99,
    oldPrice: 149.99,
    badge: "SALE",
  },
  {
    id: 2,
    name: "Professional Camera",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300",
    rating: 4,
    reviews: 28,
    price: 899.99,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300",
    rating: 5,
    reviews: 156,
    price: 79.99,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Running Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300",
    rating: 3.5,
    reviews: 63,
    price: 89.99,
    oldPrice: null,
    badge: "NEW",
  },
];

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
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                {product.badge && (
                  <div
                    className={`absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded-full ${
                      product.badge === "SALE" ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-gray-600 text-sm ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-gray-500 text-sm line-through">
                      ${product.oldPrice.toFixed(2)}
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
