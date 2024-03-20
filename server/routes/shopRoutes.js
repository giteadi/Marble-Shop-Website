const express = require('express');
const { body } = require('express-validator');
const { form} = require('../controllers/form');

const router = express.Router();

// POST /api/v1/form
router.post('/formSubmit', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('message').notEmpty().withMessage('Message is required'),
], form);

module.exports = router;
