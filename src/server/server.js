// Load environment variables from .env file
require('dotenv').config({ path: './config/.env' });

// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize the Express app
const serverApp = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
serverApp.use(express.json());

// Import the user route and mount it
const userRoute = require('./routes/users');
serverApp.use('/account/users', userRoute);

// Basic route for checking server status
serverApp.get('/', (req, res) => {
    res.send('Server is running!');
});

// Connect to MongoDB
const dbConnector = process.env.DB_CONNECTOR;
mongoose.connect(dbConnector)
    .then(() => {
        console.log('DB is now connected...');
        // Start the server only after successful DB connection
        serverApp.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('DB connection error:', err.message);
    });
