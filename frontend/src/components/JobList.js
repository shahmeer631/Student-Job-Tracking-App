import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import { API_ENDPOINTS, JOB_STATUS } from '../config/api';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState({ open: false, message: '' });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_ENDPOINTS.JOBS.GET_ALL);
      setJobs(response.data);
    } catch (error) {
      setError('Failed to fetch jobs. Please try again later.');
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (jobId, newStatus) => {
    try {
      setError(null);
      await axios.patch(API_ENDPOINTS.JOBS.UPDATE(jobId), {
        status: newStatus,
      });
      setSuccess({ open: true, message: 'Job status updated successfully!' });
      fetchJobs();
    } catch (error) {
      setError('Failed to update job status. Please try again.');
      console.error('Error updating job status:', error);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      setError(null);
      await axios.delete(API_ENDPOINTS.JOBS.DELETE(jobId));
      setSuccess({ open: true, message: 'Job deleted successfully!' });
      fetchJobs();
    } catch (error) {
      setError('Failed to delete job. Please try again.');
      console.error('Error deleting job:', error);
    }
  };

  const handleCloseSuccess = () => {
    setSuccess({ ...success, open: false });
  };

  const filteredJobs = statusFilter === 'all'
    ? jobs
    : jobs.filter(job => job.status === statusFilter);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
      <SuccessMessage
        message={success.message}
        open={success.open}
        onClose={handleCloseSuccess}
      />
      
      <FormControl sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel>Filter by Status</InputLabel>
        <Select
          value={statusFilter}
          label="Filter by Status"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          {Object.values(JOB_STATUS).map(status => (
            <MenuItem key={status} value={status}>{status}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Application Date</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.role}</TableCell>
                <TableCell>
                  <Select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job._id, e.target.value)}
                  >
                    {Object.values(JOB_STATUS).map(status => (
                      <MenuItem key={status} value={status}>{status}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>
                  {new Date(job.applicationDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {job.link && (
                    <a href={job.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  )}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(job._id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default JobList; 