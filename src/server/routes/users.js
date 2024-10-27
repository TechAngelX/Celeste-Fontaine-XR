const express = require('express');
const router = express.Router();

// Handle POST requests to /users
router.post('/', (req, res) => {
    console.log(req.body); // Log the request body
    res.status(200).send('User data received'); // Send a response
});

module.exports = router;
