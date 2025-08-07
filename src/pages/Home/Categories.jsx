import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const CategorySection = () => {
  const [categories, setCategories] = useState([]);

useEffect(() => {
  axios
    .get(`${API_URL}/api/categories/categories_get_all_api/`)
    .then((res) => {
      setCategories(Array.isArray(res.data.data) ? res.data.data : res.data.categories || []);
    })
    .catch((err) => {
      console.error('Error fetching categories:', err);
    });
}, []);
  
  console.log('API_URL:', API_URL);
  
  const BASE_URL = 'http://localhost:5000'; 

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <a href="#" className="block">
                <img
                  src={`${API_URL}${category.image_url}`}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-gray-600">Shop Now</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
