import React from 'react';
import { Alert, Box } from '@mui/material';

function ErrorMessage({ message, onClose }) {
  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Alert severity="error" onClose={onClose}>
        {message}
      </Alert>
    </Box>
  );
}

export default ErrorMessage; 