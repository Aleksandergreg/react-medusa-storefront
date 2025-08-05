import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Product = ({ product }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{
          // 16:9
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
  );
};

export default Product;