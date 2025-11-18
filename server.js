import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve static files FIRST with explicit paths
app.use('/styles.css', express.static(join(__dirname, 'styles.css')));
app.use('/lib', express.static(join(__dirname, 'lib')));
app.use('/locales', express.static(join(__dirname, 'locales')));

// Serve all static files
app.use(express.static(__dirname, {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Route for the home page
app.get('/', (req, res) => {
  console.log('Serving home page');
  res.sendFile(join(__dirname, 'index.html'));
});

// Routes for each page
app.get('/tags-reference', (req, res) => {
  console.log('Serving tags-reference page');
  res.sendFile(join(__dirname, 'tags-reference.html'));
});

app.get('/examples', (req, res) => {
  console.log('Serving examples page');
  res.sendFile(join(__dirname, 'examples.html'));
});

app.get('/resources', (req, res) => {
  console.log('Serving resources page');
  res.sendFile(join(__dirname, 'resources.html'));
});

// Fallback for any other routes - redirect to home
app.get('*', (req, res) => {
  console.log('Unknown route:', req.path);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`HTML Cheat Sheet server running on port ${port}`);
  console.log(`Open http://localhost:${port} to view the site`);
});