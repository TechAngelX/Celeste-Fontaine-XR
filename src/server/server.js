const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const signUpAuthRoutes = require('./RegisterAuth');

const app = express();

// Load environment variables from config file
const envFilePath = '/Users/xeon2035/Documents/LOCALDEV/softWEAR/CFXR/src/config/.env';
if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
} else {
    console.error('Environment file not found:', envFilePath);
    process.exit(1);
}

// MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000', // Allow your frontend origin
    methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
    credentials: true // Allow credentials if needed
}));

app.use(express.json());

// Serve static files (e.g., images, CSS, JavaScript)
app.use(express.static(path.join(__dirname, '../public')));
console.log('Serving static files from ../public');

// Set up routes
app.use('/account', signUpAuthRoutes); // Register your signup routes

// Verification route
app.get('/verify', (req, res) => {
    const token = req.query.token;

    // Validate the token (replace this with your actual validation logic)
    if (!token) {
        return res.status(400).send('Invalid verification link');
    }

    // Example token validation (should be replaced with actual logic)
    if (token === '12345') {
        return res.send('Email verified successfully!');
    } else {
        return res.status(400).send('Invalid or expired token');
    }
});

// Start the server
const PORT = process.env.PORT || 5503;
app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
