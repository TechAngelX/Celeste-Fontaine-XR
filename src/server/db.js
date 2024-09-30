const oracledb = require('oracledb');

// Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECT_STRING,
};

// Helper function to get a database connection
const getConnection = async () => {
    try {
        return await oracledb.getConnection(dbConfig);
    } catch (error) {
        console.error('Error getting database connection:', error);
        throw error; // Re-throw the error to be handled by the calling function
    }
};

// Function to insert a user
const insertUser = async (email, hashedPassword, firstName, lastName, accType, confirmationToken, userName) => {
    let connection;

    try {
        connection = await getConnection();
        await connection.execute(
            `INSERT INTO USER_ACC (UNAME, PWORD, FNAME, LNAME, EMAIL, ACCTYPE, CONFIRMATION_TOKEN, CREATED, MODIFIED)
             VALUES (:userName, :hashedPassword, :firstName, :lastName, :email, :accType, :confirmationToken, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
            {
                userName,
                hashedPassword,
                firstName,
                lastName,
                email,
                accType,
                confirmationToken,
            },
            { autoCommit: true }
        );
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error; // Re-throw the error for handling upstream
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
};

// Function to find user by confirmation token
const findUserByToken = async (token) => {
    let connection;
    let user = null;

    try {
        connection = await getConnection();
        const result = await connection.execute(
            `SELECT * FROM USER_ACC WHERE CONFIRMATION_TOKEN = :token`,
            { token }
        );

        user = result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
        console.error('Error finding user by token:', error);
        throw error; // Re-throw the error for handling upstream
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }

    return user;
};

// Function to confirm user email
const confirmUserEmail = async (token) => {
    let connection;

    try {
        connection = await getConnection();
        await connection.execute(
            `UPDATE USER_ACC SET CONFIRMATION_TOKEN = NULL WHERE CONFIRMATION_TOKEN = :token`,
            { token }
        );
        await connection.commit();
    } catch (error) {
        console.error('Error confirming user email:', error);
        throw error; // Re-throw the error for handling upstream
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
};

module.exports = {
    insertUser,
    findUserByToken,
    confirmUserEmail,
};
