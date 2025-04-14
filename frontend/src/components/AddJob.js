import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import { API_ENDPOINTS, JOB_STATUS } from '../config/api';

function AddJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: JOB_STATUS.APPLIED,
    applicationDate: new Date().toISOString().split('T')[0],
    link: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({ open: false, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await axios.post(API_ENDPOINTS.JOBS.CREATE, formData);
      setSuccess({ open: true, message: 'Job added successfully!' });
      setTimeout(() => {
        navigate('/jobs');
      }, 1500);
    } catch (error) {
      setError('Failed to add job. Please try again.');
      console.error('Error adding job:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccess = () => {
    setSuccess({ ...success, open: false });
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Add New Job Application
      </Typography>
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
      <SuccessMessage
        message={success.message}
        open={success.open}
        onClose={handleCloseSuccess}
      />
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          margin="normal"
          disabled={loading}
        />
        <TextField
          fullWidth
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          margin="normal"
          disabled={loading}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            label="Status"
            disabled={loading}
          >
            {Object.values(JOB_STATUS).map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Application Date"
          name="applicationDate"
          type="date"
          value={formData.applicationDate}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          disabled={loading}
        />
        <TextField
          fullWidth
          label="Link"
          name="link"
          value={formData.link}
          onChange={handleChange}
          margin="normal"
          disabled={loading}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Job'}
        </Button>
      </Box>
    </Paper>
  );
}

export default AddJob; 