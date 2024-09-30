const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const configPath = require('../config/configPath');
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

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('View engine set to EJS, views directory set to /views');

// Sample data to pass to the template
const data = {
    banner: [
        { img: '/images/banner/Dell.webp', alt: 'Dell' },
        { img: '/images/banner/Laptops.webp', alt: 'Laptops' }
    ],
    iconProducts: [
        [
            { img: 'laptop', title: 'Laptop', text: 'High performance laptop', tips: 'Learn More', to: '/' },
            { img: 'headset', title: 'Headset', text: 'Comfortable headset', tips: 'Shop Now', to: '/' },
            // Add more products here
        ]
        // Add more rows here if needed
    ]
};

// Route to render the home page with EJS
app.get('/', (req, res) => {
    console.log('Rendering home page');
    res.render('home', { data });
});

// Route for signup
app.use('/', RegisterAuthRoutes); // This will make the signup route available at /api/signup

// Handle React routing, return the main HTML file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
    console.log(`Serving React app for route: ${req.path}`);
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
