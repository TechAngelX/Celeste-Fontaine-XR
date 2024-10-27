// signUpAuthValidations.js - Handles registration validation logic

const express = require('express');
const router = express.Router();
const User = require('../models/UserModel'); // The MongoDB database objects
const bcryptjs = require('bcryptjs');
const { registerValidation } = require('./validation');

// User Registration Route
router.post('/register', async (req, res) => {
    try {
        res.status(200).json({ message: 'Registration successful' });

        // Validate user input
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { fname, lname, email, password, accType = 0 } = req.body; // Default accType to 0

        // Generate a unique username
        let generatedUsername = await generateUniqueUsername(fname, lname);

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create a new user object
        const newUser = new User({
            uname: generatedUsername,   // Username
            pword: hashedPassword,      // Hashed password
            fname,                      // First name
            lname,                      // Last name
            email,                      // Email
            accType                     // Account type
        });

        // Save the new user
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully!', userId: savedUser._id });

        // Log registration details
        console.log(`User registered successfully! Details:\nUsername: ${generatedUsername}\nRequest Body:`, req.body);

    } catch (err) {
        console.error('Error registering user:', err);
        res.status(400).json({ message: err.message });
    }
});

// Function to generate a unique username based on first and last names
const generateUniqueUsername = async (fname, lname) => {
    const baseUsername = generateBaseUsername(fname, lname);
    let uniqueUsername = baseUsername;
    let exists = await User.findOne({ uname: uniqueUsername });

    // Ensure the generated username is unique
    while (exists) {
        const randomSuffix = Math.floor(100 + Math.random() * 900);
        uniqueUsername = `${baseUsername}${randomSuffix}`;
        exists = await User.findOne({ uname: uniqueUsername });
    }

    return uniqueUsername;
};

// Helper function to generate the base username
const generateBaseUsername = (fname, lname) => {
    const firstInitial = fname.charAt(0).toLowerCase();
    const lastFiveChars = lname.substring(0, 5).toLowerCase();
    return `${firstInitial}${lastFiveChars}`;
};

module.exports = router;
