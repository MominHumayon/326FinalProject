import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors());

// Serve static files from frontend directory
app.use(express.static("../frontend"));


// Start server
app.listen(PORT, () => {
    console.log(`Frontend server running at http://localhost:${PORT}`);
    console.log('Make sure to also run:');
    console.log('1. Backend server (default port 4000)');
    console.log('2. Scraper server (default port 5000)');
});