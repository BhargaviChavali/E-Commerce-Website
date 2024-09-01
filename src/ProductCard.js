import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.name}
        image={product.image}
        style={{ height: 'auto', maxHeight: '200px', objectFit: 'contain' }} // Adjusted to fit the image within the card
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/product/${product.id}`}
          style={{ marginTop: '10px' }}
        >
          View Details
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => addToCart(product)}
          style={{ marginTop: '10px', marginLeft: '10px' }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
