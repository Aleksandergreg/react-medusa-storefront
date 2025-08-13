import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import axios from 'axios';

const Productlist = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
    if (response?.data) {
      dispatch(setProducts(response.data));
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  const normalizedQuery = searchQuery.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(normalizedQuery)
  );

  return (
    <div className="container mx-auto py-4">
      <div className="mb-4 px-1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Productlist;