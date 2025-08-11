import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import axios from 'axios';
import { Grid, Container } from '@mui/material';

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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            key={product.id}
            sx={{ 
              display: 'flex',
              minHeight: '400px' 
            }}
          >
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Productlist;