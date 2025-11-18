import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// Routes for each page
app.get('/fundamentals', (req, res) => {
  res.sendFile(join(__dirname, 'fundamentals.html'));
});

app.get('/tags-reference', (req, res) => {
  res.sendFile(join(__dirname, 'tags-reference.html'));
});

app.get('/examples', (req, res) => {
  res.sendFile(join(__dirname, 'examples.html'));
});

app.get('/resources', (req, res) => {
  res.sendFile(join(__dirname, 'resources.html'));
});

// Fallback for any other routes - redirect to home
app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`HTML Cheat Sheet server running on port ${port}`);
});