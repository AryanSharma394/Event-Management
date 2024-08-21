import React from 'react';
import { motion } from 'framer-motion';
import { Button, Container, Grid, Typography, Box } from '@mui/material';
import heroImage from '../assets/WhatsApp Image 2024-08-21 at 14.17.27_6c735a87.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const handle = ()=>{
        navigate('/login')
    }
  return (
    <motion.section
      className="bg-gradient-to-r from-blue-900 to-purple-500 text-white min-h-screen flex items-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Elev8
              </Typography>
              <Typography variant="h5" component="p" gutterBottom>
              Unlock the best coding events and hackathons tailored for students—start your journey to success here!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button
                onClick={handle}
                variant="contained"
                size="large"
                href="#features"
                sx={{ mt: 3, backgroundColor: '' }}
              >
                Start Now
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Hero Image"
                sx={{ width: '80%', borderRadius: '10%', marginLeft: '60px' }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.section>
  );
};

export default Hero;