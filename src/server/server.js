const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const configPath = {
    envPath: '/Users/xeon2035/Documents/LOCALDEV/softWEAR/CFXR/src/config/.env'
};

const signUpAuthRoutes = require('./RegisterAuth');

const app = express();

// Load environment variables from config file
const envFilePath = configPath.envPath;
if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
} else {
    console.error('Environment file not found:', envFilePath);
    process.exit(1);
}

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (e.g., images, CSS, JavaScript)
app.use(express.static(path.join(__dirname, '../public')));
console.log('Serving static files from ../public');

// Set up routes
app.use('/account', signUpAuthRoutes); // Register your signup routes

// Start the server
const PORT = process.env.PORT || 5503;
app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
