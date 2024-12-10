const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
    user: 'mary',  // Replace with your Postgres username
    host: 'localhost',
    database: 'todo',  // Database name
    password: 'Password',  // Replace with your Postgres password
    port: 5432,  // Default Postgres port
});

// Export the pool for use in other files
module.exports = pool;
