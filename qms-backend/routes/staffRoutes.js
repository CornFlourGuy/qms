const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get all staff members
router.get('/staffs', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, name, email FROM Users WHERE role = ?', ['staff']);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;