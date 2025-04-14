const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  JOBS: {
    GET_ALL: `${API_BASE_URL}/jobs`,
    CREATE: `${API_BASE_URL}/jobs`,
    UPDATE: (id) => `${API_BASE_URL}/jobs/${id}`,
    DELETE: (id) => `${API_BASE_URL}/jobs/${id}`,
  },
};

export const JOB_STATUS = {
  APPLIED: 'Applied',
  INTERVIEW: 'Interview',
  OFFER: 'Offer',
  REJECTED: 'Rejected',
}; 