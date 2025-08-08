import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filters() {
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/products/highest_price`)
      .then((res) => {
        const price = Number(res.data.data && res.data.data.highest_price ? res.data.data.highest_price : 0);
        setMaxPrice(price);
        setSelectedPrice(price);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/categories/categories_get_all_api`)
      .then((res) => {
        const categoriesData = Array.isArray(res.data.data) ? res.data.data : [];
        setCategories(categoriesData);

        // Initialize selected categories state
        const initialSelected = {};
        categoriesData.forEach(category => {
          initialSelected[category.id] = false;
        });
        setSelectedCategories(initialSelected);
      })
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  console.log('Categories:', categories);
  console.log('Selected Categories:', selectedCategories);

  // const [brands, setBrands] = useState({
  //   apple: false,
  //   samsung: true,
  //   fitbit: false,
  //   garmin: false,
  // });

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }));
  };

  const handleBrandChange = (name) => {
    setBrands((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="w-full md:w-1/4">
      <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">₫0</span>
            <span className="text-sm">₫{selectedPrice.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={maxPrice === 0}
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm font-medium">
              ₫0 - ₫{selectedPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Categories</h4>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories[category.id] || false}
                    onChange={() => handleCategoryChange(category.id)}
                    className="form-checkbox text-primary rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-600">{category.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        {/* <div className="mb-6">
          <h4 className="font-medium mb-3">Brands</h4>
          <ul className="space-y-2">
            {[
              { key: 'apple', label: 'Apple' },
              { key: 'samsung', label: 'Samsung' },
              { key: 'fitbit', label: 'Fitbit' },
              { key: 'garmin', label: 'Garmin' },
            ].map(({ key, label }) => (
              <li key={key}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={brands[key]}
                    onChange={() => handleBrandChange(key)}
                    className="form-checkbox text-primary rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-600">{label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div> */}

        <button
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => {
            // You can handle applying the filters here
            console.log({ selectedPrice, selectedCategories, brands });
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
