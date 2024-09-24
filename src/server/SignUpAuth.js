const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');

// Handle database connection errors
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
};

// Sign up endpoint
router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Get a connection
        const connection = await oracledb.getConnection(dbConfig);

        // Insert user into database
        const result = await connection.execute(
            `INSERT INTO USER_ACC (UNAME, FNAME, LNAME, EMAIL, PWORD) 
       VALUES (:username, :firstName, :lastName, :email, :hashedPassword)`,
            { username, firstName, lastName, email, hashedPassword }, // Ensure you hash the password before storing it
            { autoCommit: true }
        );

        // Close the connection
        await connection.close();

        return res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Database error.' });
    }
});

module.exports = router;
