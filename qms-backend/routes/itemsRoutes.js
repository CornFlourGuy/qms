const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get all items
router.get('/items', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Items');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;