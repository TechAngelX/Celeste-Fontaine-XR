require('dotenv').config();
const express = require('express');

const serverApp = express();
const PORT = process.env.PORT || 3000;

// Middleware
serverApp.use(express.json()); // Parse JSON requests

// Import the user route
const userRoute = require('./routes/users'); // Ensure the path is correct
serverApp.use('/users', userRoute); // Mount the user route

// Basic route
serverApp.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
serverApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
