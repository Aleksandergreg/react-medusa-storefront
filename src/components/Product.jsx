import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    // Wrap the entire Card in a Link component
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{
            pt: '5%',
            objectFit: 'contain',
            height: '200px',
          }}
          image={product.image}
          alt={product.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.title}
          </Typography>
          <Typography variant="h5">
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Product;