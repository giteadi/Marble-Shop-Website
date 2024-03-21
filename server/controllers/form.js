const { validationResult } = require('express-validator');
const getPool = require('../config/sqlDB'); // Note the change here

const form = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message,phone } = req.body;

    try {
        const pool = await getPool(); // Call the exported function to get the pool
        const connection = await pool.getConnection();
        await connection.query('INSERT INTO formData (name, email, message,phone) VALUES (?, ?, ?,?)', [name, email, message,phone]);
        connection.release();
        return res.status(201).json({ message: 'Form data saved successfully' });
    } catch (err) {
        console.error('Error saving form data:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    form
};
