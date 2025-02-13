const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Step 1: Check if the user exists
        const [users] = await db.query('SELECT * FROM Users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = users[0];

        // Step 2: Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Step 3: Generate a JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role }, // Payload (user ID and role)
            process.env.JWT_SECRET,         // Secret key from .env
            { expiresIn: '1h' }             // Token expiration time
        );

        // Step 4: Send the token and user role in the response
        res.json({
            success: true,
            token,
            role: user.role,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;