const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const itemsRoutes = require('./routes/itemsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
// Use routes
app.use('/api', itemsRoutes);
// Use routes
app.use('/auth', authRoutes);

// Load environment variables
dotenv.config();

// Initialize app

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Smart Queue Management System API is running successfully!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});