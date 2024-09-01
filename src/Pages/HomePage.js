import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../Components/ProductList';


const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;