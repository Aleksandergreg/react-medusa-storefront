import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import axios from 'axios';

const Productlist = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Productlist;