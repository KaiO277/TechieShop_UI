import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" data-id="qjlrvk1w" data-line="314-380">
      <div className="container mx-auto px-4" data-id="71n81ide" data-line="315-379">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-id="auhob8md" data-line="316-367">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-shopping-bag mr-2"></i>
              ShopEase
            </h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all your needs. Quality products at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Featured</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sale Items</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Commerce St, City, Country
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:info@shopease.com">info@shopease.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 ShopEase. All rights reserved.</p>
            <div className="flex space-x-4">
              <img src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Visa logo" className="h-6" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Mastercard logo" className="h-6" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Amex logo" className="h-6" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=srgb&fm=jpg&q=85" alt="Paypal logo" className="h-6" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
