import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Student Job Tracker
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Keep track of your job applications in one place
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/jobs')}
            sx={{ mr: 2 }}
          >
            View Applications
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/add')}
          >
            Add New Application
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Home; 