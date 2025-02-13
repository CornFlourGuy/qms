const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Maximum number of connections in the pool
    queueLimit: 0, // No limit on queued connection requests
});

// Test the database connection
pool.getConnection()
    .then((connection) => {
        console.log('Database connected successfully!');
        connection.release(); // Release the connection back to the pool
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err.message);
    });

module.exports = pool;