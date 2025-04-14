import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Student Job Tracker
        </Typography>
        <Button
          color="inherit"
          component={RouterLink}
          to="/jobs"
          sx={{ mx: 1 }}
        >
          View Jobs
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/add"
          sx={{ mx: 1 }}
        >
          Add Job
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 