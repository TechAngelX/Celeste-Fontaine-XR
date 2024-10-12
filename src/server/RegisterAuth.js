const jwt = require('jsonwebtoken');
const express = require('express');
const oracledb = require('oracledb');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const config = require('/Users/xeon2035/Documents/LOCALDEV/softWEAR/CFXR/src/config/configPath'); // Adjust path to match your project
const { sendVerificationEmail } = require('./emailService'); // Import the email service

const router = express.Router();

// Function to generate username based on first and last names
const generateUName = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toLowerCase();
    const lastFiveChars = lastName.substring(0, 5).toLowerCase();
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    return `${firstInitial}${lastFiveChars}${randomNumbers}`;
};

// Function to insert user into the USER_ACC table
const insertAccUser = async (uName, firstName, lastName, pWord, email, accType) => {
    let connection;

    try {
        console.log('Attempting to connect to the database...');
        connection = await oracledb.getConnection({
            user: config.dbUser,
            password: config.dbPassword,
            connectionString: config.dbConnectionString
        });
        console.log('Database connection established successfully.');

        const sql = `
            INSERT INTO USER_ACC (UNAME, FNAME, LNAME, PWORD, EMAIL, ACCTYPE, CREATED, MODIFIED)
            VALUES (:uName, :firstName, :lastName, :pWord, :email, :accType, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `;

        const binds = { uName, firstName, lastName, pWord, email, accType };

        console.log('Executing SQL:', sql);
        console.log('With binds:', binds);

        await connection.execute(sql, binds);
        await connection.commit();
        console.log('User created and transaction committed.');

    } catch (err) {
        console.error('Database error:', err);
        throw err;
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Database connection closed.');
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
};

// Route for user signup
router.post('/register', async (req, res) => {
    const { firstName, lastName, pWord, email, accType } = req.body;

    // Optional: Uncomment to validate required fields
    if (!firstName || !lastName || !pWord || !email || !accType) {
        console.error('Validation error: All fields are required.');
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const uName = generateUName(firstName, lastName);

    try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(pWord, 10);

        await insertAccUser(uName, firstName, lastName, hashedPassword, email, accType);

        // Generate a JWT token for email verification
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set expiration as needed

        // Create a verification link with the token
        const verificationLink = `http://localhost:3000/verify?token=${token}`;

        // Send the verification email
        await sendVerificationEmail(email, verificationLink);

        return res.status(201).json({ message: 'User created successfully! Please verify your email.' });
    } catch (err) {
        console.error('Error in signup route:', err);
        return res.status(500).json({ error: 'Database error.' });
    }
});

module.exports = router;
