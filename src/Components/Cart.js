import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`${item.price}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" style={{ marginTop: '20px' }}>Total: ${totalPrice}</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }} href="/checkout">
        Checkout
      </Button>
    </div>
  );
};

export default Cart;