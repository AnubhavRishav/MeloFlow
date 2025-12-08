import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Song from './models/Song.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Music data
const songs = [
    {
        title: "O SUDH BUDH KHOYI",
        author: "Arijit Singh",
        duration: 261,
        url: "./songs/O sudh budh khoyi hai khoyi Maine.m4a",
        img: "./images/o sudh budh.jpeg"
    },
    {
        title: "NAMO NAMO",
        author: "Arijit Singh",
        duration: 324,
        url: "./songs/Namo Namo.mp3",
        img: "./images/NAMO.jpeg"
    },
    {
        title: "TILL I COLLAPSE",
        author: "Eminem",
        duration: 297,
        url: "./songs/Till I Collapse.mp3",
        img: "./images/TillIcollapse.jpg"
    },
    {
        title: "RANG JO LAGYO",
        author: "Atif Aslam",
        duration: 129,
        url: "./songs/Rang Jo Lagyo.m4a",
        img: "./images/Rang jo lagyo.jpeg"
    },
    {
        title: "SAMAY SAMJHAYEGA",
        author: "Mohit Lalwani",
        duration: 198,
        url: "./songs/Samay Samjhayega.m4a",
        img: "./images/samay samjhayega.jpg"
    },
    {
        title: "SOCHA HAI",
        author: "Jubin Nautiyal",
        duration: 136,
        url: "./songs/Socha Hai Song.m4a",
        img: "./images/socha hai.jpeg"
    }
];

// Routes
app.get('/api/songs', async (req, res) => {
    try {
        const dbSongs = await Song.find();
        
        // If database is empty, return default songs
        if (dbSongs.length === 0) {
            res.json(songs);
        } else {
            res.json(dbSongs);
        }
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).json({ message: 'Error fetching songs' });
    }
});

app.get('/api/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (song) {
            res.json(song);
        } else {
            res.status(404).json({ message: 'Song not found' });
        }
    } catch (error) {
        console.error('Error fetching song:', error);
        res.status(500).json({ message: 'Error fetching song' });
    }
});

// Seed database with initial songs
app.get('/api/seed', async (req, res) => {
    try {
        const existingSongs = await Song.countDocuments();
        
        if (existingSongs === 0) {
            await Song.insertMany(songs);
            res.json({ message: 'Database seeded successfully', count: songs.length });
        } else {
            res.json({ message: 'Database already has songs', count: existingSongs });
        }
    } catch (error) {
        console.error('Error seeding database:', error);
        res.status(500).json({ message: 'Error seeding database' });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🎵 MeloFlow Backend running on http://localhost:${PORT}`);
});
