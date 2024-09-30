const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const db = require('./db');
const router = express.Router();

// Function to generate username based on first and last names
const generateUsername = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toLowerCase();
    const lastFiveChars = lastName.substring(0, 5).toLowerCase();
    const randomNumbers = Math.floor(100 + Math.random() * 900); // Generates a random number between 100 and 999
    return `${firstInitial}${lastFiveChars}${randomNumbers}`;
};

// Route for user signup
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    console.log("Signup request received:", req.body);

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
        console.error('Validation error: All fields are required.');
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const accType = 1; // Adjust as necessary for your application
        const confirmationToken = crypto.randomBytes(20).toString('hex');
        const userName = generateUsername(firstName, lastName);

        // Insert user into the database
        await db.insertUser(email, hashedPassword, firstName, lastName, accType, confirmationToken, userName);

        // Send confirmation email (if needed)

        return res.status(201).json({ message: 'User created successfully! Please confirm your email.' });
    } catch (err) {
        console.error('Error in signup route:', err);
        return res.status(500).json({ error: 'Database error.' });
    }
});

module.exports = router;
