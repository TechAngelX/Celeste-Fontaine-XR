// auth.js - dedicated to handling login/registration, token authentication, and validation

const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');
const { registerValidation, loginValidation } = require('../validations/validation');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Test route
router.get('/test', (req, res) => {
    res.send('Test route is working');
});

// User Registration Route
router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const { fname, lname, email, password } = req.body;
    const username = generateUsername(fname, lname);

    try {
        await validateUserExistence(username, email);
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully!', userId: savedUser._id });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(400).json({ message: err.message });
    }
});

// User Login Route
router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: 'User does not exist' });

    const passwordValid = await bcryptjs.compare(req.body.password, user.password);
    if (!passwordValid) return res.status(400).send({ message: 'Invalid password' });

    //Generate an auth-token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send({ 'auth-token': token });
});

// Helper Functions
const generateUsername = (fname, lname) => {
    const firstInitial = fname.charAt(0).toLowerCase();
    const lastFiveChars = lname.substring(0, 5).toLowerCase();
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    return `${firstInitial}${lastFiveChars}${randomNumbers}`;
};

const validateUserExistence = async (username, email) => {
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });

    if (existingUser) throw new Error('Username already exists');
    if (existingEmail) throw new Error('Email already exists');
};

module.exports = router;
