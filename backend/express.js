import express from 'express';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import { fileURLToPath } from 'url';

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// API Routes
app.use('/api', authRoutes);

// Static File Serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../frontend/dist/')));

// SPA Handling
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: err.name + ': ' + err.message });
  } else {
    res.status(400).json({ error: err.name + ': ' + err.message });
    console.log(err);
  }
});

export default app;
