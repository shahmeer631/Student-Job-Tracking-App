# Student Job Tracker

A web application to help students track their job applications.

## Features

- Add new job applications
- View all job applications
- Filter applications by status
- Update application status
- Delete applications
- Clean and responsive UI

## Tech Stack

### Frontend
- React.js
- Material-UI
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following content:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/student-job-tracker
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

## API Endpoints

- GET `/api/jobs` - Get all job applications
- POST `/api/jobs` - Create a new job application
- PATCH `/api/jobs/:id` - Update a job application
- DELETE `/api/jobs/:id` - Delete a job application

## Project Structure

```
Student Job Tracking/
├── backend/
│   ├── models/
│   │   └── Job.js
│   ├── routes/
│   │   └── jobs.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── JobList.js
    │   │   └── AddJob.js
    │   ├── App.js
    │   └── index.js
    └── package.json
``` "# Student-Job-Tracking-App" 
