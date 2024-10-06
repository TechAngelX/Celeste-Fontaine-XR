const express = require('express');
const oracledb = require('oracledb'); // Ensure oracledb is installed
const config = require('/Users/xeon2035/Documents/LOCALDEV/softWEAR/CFXR/src/config/configPath'); // Import the config file

const router = express.Router();

// Function to insert user into the MYNAMEIS table
const insertUser = async (firstName) => {
    let connection;

    try {
        // Establish a database connection using the config values
        console.log('Attempting to connect to the database...');
        connection = await oracledb.getConnection({
            user: config.dbUser, // Your DB username
            password: config.dbPassword, // Your DB password
            connectionString: config.dbConnectionString // Your DB connection string
        });
        console.log('Database connection established successfully.');

        const sql = `
            INSERT INTO MYNAMEIS (FNAME, CREATED, MODIFIED)
            VALUES (:firstName, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
        `;

        const binds = {
            firstName
        };

        console.log('Executing SQL:', sql);
        console.log('With binds:', binds);

        await connection.execute(sql, binds);
        console.log('SQL executed successfully, committing transaction...');
        await connection.commit(); // Commit the transaction
        console.log('Transaction committed successfully.');

    } catch (err) {
        console.error('Database insert error:', err);
        throw err; // Rethrow the error to handle it in the route
    } finally {
        if (connection) {
            try {
                await connection.close(); // Close the connection
                console.log('Database connection closed.');
            } catch (err) {
                console.error('Error closing the connection:', err);
            }
        }
    }
};

// Route for user signup
router.post('/register', async (req, res) => {
    const { firstName } = req.body; // Only taking firstName as per the schema

    console.log("Signup request received:", req.body);

    // Basic validation
    if (!firstName) {
        console.error('Validation error: First name is required.');
        return res.status(400).json({ error: 'First name is required.' });
    }

    try {
        console.log('Inserting user into the database...');
        // Insert the user's first name into the MYNAMEIS table
        await insertUser(firstName);
        console.log('User created successfully!');

        return res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        console.error('Error in signup route:', err);
        return res.status(500).json({ error: 'Database error.' });
    }
});

module.exports = router;
