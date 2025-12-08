# Music Player - MeloFlow

A beautiful and modern music player built with React, Vite, Express, and MongoDB Atlas.

## Site Link

https://meloflow.netlify.app/

## Features

- Modern UI with React and Vite
- Full-stack application with Express backend
- MongoDB Atlas database integration
- Play, pause, skip, and loop controls
- Playlist management
- Responsive design

## Tech Stack

### Frontend
- React 18
- Vite
- CSS3
- React Icons

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- CORS enabled

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

**Frontend:**
```bash
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the backend folder:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/meloflow
```

## API Endpoints

- `GET /api/songs` - Get all songs
- `GET /api/songs/:id` - Get a specific song
- `GET /api/seed` - Seed the database with initial songs
- `GET /health` - Server health check

