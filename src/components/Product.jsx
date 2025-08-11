import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card
      component={Link}
      to={`/product/${product.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 3,
        }
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: '200px',
          objectFit: 'contain',
          backgroundColor: '#f5f5f5' 
        }}
        image={product.image}
        alt={product.title}
      />
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          padding: 2
        }}
      >
        {/* Title container with fixed height */}
        <Box
          sx={{
            height: '4.5em', // Fixed height for title area
            mb: 2,
            display: 'flex',
            alignItems: 'flex-start'
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.3,
              fontSize: '1.1rem'
            }}
          >
            {product.title}
          </Typography>
        </Box>
        
        {/* Price at bottom */}
        <Box sx={{ mt: 'auto' }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            ${product.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Product;