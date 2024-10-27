// signUpAuthValidations.js - Handles registration validation logic

const express = require('express');
const router = express.Router();

const userModel = require('../models/UserModel.js'); // Fixed typo

// Handle POST requests to /users
router.post('/', async (req, res) => { // Made the function async
    console.log(req.body); // Log the request body

    // Create a new user object
    const userData = new userModel({ // Use userModel instead of User
        uname: req.body.uname,
        pword: req.body.pword,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        accType: req.body.accType
    });

    try {
        // Save the user to the database
        const savedUser = await userData.save();
        res.status(201).json({ message: 'Registration successful', user: savedUser }); // Moved this line up
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
});

module.exports = router;
