import { useState } from 'react';

export default function Filters() {
  const [price, setPrice] = useState(250);
  const [categories, setCategories] = useState({
    smartWatches: false,
    fitnessTrackers: true,
    smartBands: false,
    accessories: false,
  });

  const [brands, setBrands] = useState({
    apple: false,
    samsung: true,
    fitbit: false,
    garmin: false,
  });

  const handleCategoryChange = (name) => {
    setCategories((prev) => ({ ...prev, [name]: !prev[name] }));
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
            <span className="text-sm">$0</span>
            <span className="text-sm">$500</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm font-medium">${`0 - ${price}`}</span>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Categories</h4>
          <ul className="space-y-2">
            {[
              { key: 'smartWatches', label: 'Smart Watches' },
              { key: 'fitnessTrackers', label: 'Fitness Trackers' },
              { key: 'smartBands', label: 'Smart Bands' },
              { key: 'accessories', label: 'Accessories' },
            ].map(({ key, label }) => (
              <li key={key}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={categories[key]}
                    onChange={() => handleCategoryChange(key)}
                    className="form-checkbox text-primary rounded focus:ring-primary"
                  />
                  <span className="ml-2 text-gray-600">{label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div className="mb-6">
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
        </div>

        <button
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => {
            // You can handle applying the filters here
            console.log({ price, categories, brands });
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
