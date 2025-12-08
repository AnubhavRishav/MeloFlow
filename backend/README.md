# MeloFlow Backend with MongoDB

## Prerequisites

Make sure you have MongoDB installed and running on your system.

### Install MongoDB

**Windows:**
1. Download from https://www.mongodb.com/try/download/community
2. Run the installer and follow the setup wizard
3. MongoDB will run as a service by default

**Verify MongoDB is running:**
```powershell
mongosh
```

## Setup Instructions

1. **Install dependencies:**
   ```powershell
   npm install
   ```

2. **Configure environment variables:**
   - `.env` file is already created with default MongoDB connection

3. **Start the backend:**
   ```powershell
   npm run dev
   ```

4. **Seed the database (one time):**
   Open your browser or use curl/Postman to hit:
   ```
   http://localhost:5000/api/seed
   ```
   This will populate your MongoDB with the default songs.

## API Endpoints

- **GET** `/api/songs` - Get all songs
- **GET** `/api/songs/:id` - Get a specific song by ID
- **POST** `/api/seed` - Seed the database with initial songs
- **GET** `/health` - Check server status

## Notes

- If MongoDB is not running, the backend will fail to start
- The frontend will still work with local data if the backend is down
- Songs are stored in MongoDB with timestamps
