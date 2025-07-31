//create a productlist component, this component should use useEffect to fetch a list of products from fakestore API
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import { Grid } from '@mui/material';

const Productlist = () => { 
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.error('Error fetching products:', err);
        });
        dispatch(setProducts(response.data));
    };
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <Grid container spacing={2}>
        {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product product={product} />
            </Grid>
        ))}
        </Grid>
    );
    }

export default Productlist;