const mysql = require("mysql2/promise");
require('dotenv').config();

async function pool() {
    return await mysql.createPool({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME,
        waitForConnections: true,
    });
}

module.exports = pool;