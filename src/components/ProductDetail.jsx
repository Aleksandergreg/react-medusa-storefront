import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, removeSelectedProduct } from '../redux/productSlice';
import { Grid, Typography, Card, CardMedia, CardContent, CircularProgress, Box, Rating } from '@mui/material';

const ProductDetail = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.allProducts.selectedProduct);
    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetail(productId);
        }
        // Cleanup function
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    // Show a loading spinner while the product is being fetched
    if (Object.keys(product).length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Card sx={{ mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.title}
                        sx={{ width: '100%', height: 'auto', maxHeight: 500, objectFit: 'contain', p: 3 }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                            ${product.price}
                        </Typography>
                         <Rating name="read-only" value={product.rating.rate} readOnly />
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            {product.description}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
                            Category: {product.category}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProductDetail;