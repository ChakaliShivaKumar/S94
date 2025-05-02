// Main server file for S94 - Generative AI Innovations
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'shiva-s94-secret-key'; // Use environment variable in production

// Middleware

// Configure CORS

// Configure CORS for credentials
const corsOptions = {
  origin: ['http://localhost:3001','https://s94.onrender.com'], // Your frontend origin
  credentials: true, // Required for cookies/sessions
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));
app.use(express.json());

// Connect to MongoDB - Use environment variable for connection string when deploying to Render
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/s94db';
mongoose.connect('mongodb+srv://schakali:schakali@cluster0.42xoegk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Simple Chart Schema
const ChartSchema = new mongoose.Schema({
  chartType: String,
  chartData: mongoose.Schema.Types.Mixed
});

const Chart = mongoose.model('Chart', ChartSchema);

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Add this with your other routes
app.get('/api/check-auth', (req, res) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({ loggedIn: false });
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.json({ loggedIn: false });
    }
  
    try {
      jwt.verify(token, JWT_SECRET);
      res.json({ loggedIn: true });
    } catch (error) {
      res.json({ loggedIn: false });
    }
  });


// Routes
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple authentication - hardcoded for this project
  if (username === 'Shiva' && password === 'Shiva') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Get data for first chart (Growth in Generative AI Models)
app.get('/api/charts/ai-models', authMiddleware, async (req, res) => {
  try {
    // For this project, we'll use hardcoded data
    // In a real app, you would fetch this from the database
    const data = [
      { month: 'Nov 2024', models: 125 },
      { month: 'Dec 2024', models: 142 },
      { month: 'Jan 2025', models: 159 },
      { month: 'Feb 2025', models: 178 },
      { month: 'Mar 2025', models: 198 },
      { month: 'Apr 2025', models: 210 }
    ];
    
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get data for second chart (Industry Adoption of Generative AI)
app.get('/api/charts/industry-adoption', authMiddleware, async (req, res) => {
  try {
    // Hardcoded data
    const data = [
      { industry: 'Healthcare', adoption: 68 },
      { industry: 'Finance', adoption: 72 },
      { industry: 'Retail', adoption: 55 },
      { industry: 'Manufacturing', adoption: 48 },
      { industry: 'Education', adoption: 63 },
      { industry: 'Entertainment', adoption: 77 }
    ];
    
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Initialize DB with dummy data if needed
const initializeDB = async () => {
  const chartCount = await Chart.countDocuments();
  if (chartCount === 0) {
    await Chart.create({
      chartType: 'ai-models',
      chartData: [
        { month: 'Nov 2024', models: 125 },
        { month: 'Dec 2024', models: 142 },
        { month: 'Jan 2025', models: 159 },
        { month: 'Feb 2025', models: 178 },
        { month: 'Mar 2025', models: 198 },
        { month: 'Apr 2025', models: 210 }
      ]
    });
    
    await Chart.create({
      chartType: 'industry-adoption',
      chartData: [
        { industry: 'Healthcare', adoption: 68 },
        { industry: 'Finance', adoption: 72 },
        { industry: 'Retail', adoption: 55 },
        { industry: 'Manufacturing', adoption: 48 },
        { industry: 'Education', adoption: 63 },
        { industry: 'Entertainment', adoption: 77 }
      ]
    });
    console.log('Database initialized with chart data');
  }
};

app.get('/api/summary-chart', (req, res) => {
    res.json([
        { name: 'Jan', EV_Adoption: 40 },
        { name: 'Feb', EV_Adoption: 50 },
        { name: 'Mar', EV_Adoption: 65 },
        { name: 'Apr', EV_Adoption: 70 },
        { name: 'May', EV_Adoption: 80 }
    ]);
});

app.get('/api/report-chart', (req, res) => {
    res.json([
        { month: 'Jan', price: 3.5 },
        { month: 'Feb', price: 3.7 },
        { month: 'Mar', price: 3.9 },
        { month: 'Apr', price: 4.1 },
        { month: 'May', price: 4.3 }
    ]);
});


// Simple health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await initializeDB();
});