import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Content from './pages/Home/index.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import ContentProduct from './pages/Products/ContentProduct.jsx'
import ShoppingCart from './pages/Cart/ShoppingCart.jsx'
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx'
import './App.css';
import './index.css';


function App() {

  return (
    <>
      <div className="bg-gray-50" data-id="l1u0ruh7" data-line="14-382">
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/products/list" element={<ContentProduct />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App


