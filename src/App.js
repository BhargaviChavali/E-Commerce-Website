import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/style.css';
import HomePage from './Pages/HomePage';
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.length} />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
