import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'black', // Set background to black
        color: 'white', // Set text color to white
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6">MY E-Commerce App</Typography>
            <Typography variant="body2" color="white">
              &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6">Quick Links</Typography>
            <Link href="/" color="inherit" sx={{ display: 'block', marginTop: 1, color: 'white' }}>
              Home
            </Link>
            <Link href="/cart" color="inherit" sx={{ display: 'block', marginTop: 1, color: 'white' }}>
              Cart
            </Link>
            <Link href="/checkout" color="inherit" sx={{ display: 'block', marginTop: 1, color: 'white' }}>
              Checkout
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} textAlign="center">
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Link href="https://www.facebook.com" color="inherit" sx={{ mx: 1, color: 'white' }}>
                <Facebook />
              </Link>
              <Link href="https://www.twitter.com" color="inherit" sx={{ mx: 1, color: 'white' }}>
                <Twitter />
              </Link>
              <Link href="https://www.instagram.com" color="inherit" sx={{ mx: 1, color: 'white' }}>
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
