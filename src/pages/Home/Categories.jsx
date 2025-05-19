import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/categories/categories_get_all_api/')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  const BASE_URL = 'http://127.0.0.1:8000'; // Prefix cho ảnh nếu path là /media/...

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
                  src={`${BASE_URL}${category.image}`}
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
